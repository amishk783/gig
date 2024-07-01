import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolve } from "path";
type FormValues = {
  name: string;
  number: string;
  pincode: string;
  address: string | undefined;
};

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  number: z
    .string()
    .min(10, "Number should be 10 digits")
    .nonempty("Number is required"),
  pincode: z.string().min(10, "Pincode should be 6 digits").nonempty("Pincode is required"),
  address: z.string().nonempty("Address is required").optional(),
});

export function Form({
  isFooter = false,
  isCoperate = false,
}: {
  isFooter?: boolean;
  isCoperate?: boolean;
}) {
  console.log(isFooter);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const submitHandler = async (data: FormValues) => {
    console.log(data);
    const response = await fetch("/api/email", {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (response.ok) {
      alert("Email sent");
    }
  };
  console.log(errors);
  return (
    <form
      className="flex flex-col space-y-3 p-5 w-full "
      onSubmit={handleSubmit(submitHandler)}
    >
      <label className="">Name</label>
      <input
        className=" border-2 border-slate-200 rounded-md py-2 px-3"
        placeholder="John doe"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-500 text-md pl-2">{errors.name.message}</span>
      )}

      <label>Phone number</label>
      <input
        className=" border-2 border-slate-200 rounded-md py-2 px-3"
        placeholder="+91-1234567890"
        {...register("number", { required: true })}
      />
      {errors.number && (
        <span className="text-red-500 text-md pl-2">
          {errors.number.message}
        </span>
      )}

      {!isFooter && (
        <>
          <label className="">Pincode</label>
          <input
            className=" border-2 border-slate-200 rounded-md py-2 px-3"
            {...register("pincode", { required: true })}
            placeholder="Please share your pincode"
          />
          {errors.pincode && (
            <span className="text-red-500 text-md pl-2">
              {errors.pincode.message}
            </span>
          )}
        </>
      )}
      {isCoperate && (
        <>
          <label className="">Message</label>
          <textarea
            className=" border-2 border-slate-200 rounded-md py-2 px-3"
            {...register("address", { required: true })}
            placeholder="Please share your message"
          />
        </>
      )}
      <button
        className=" bg-[#FC2E20] hover:bg-red-700 py-2 px-2 text-white text-lg rounded-md font-semibold"
        type="submit"
      >
        Get a call back
      </button>
    </form>
  );
}
