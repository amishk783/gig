import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolve } from "path";
type FormValues = {
  name: string;
  number: string;
  message: string;
};

const schema = z.object({
  name: z.string().nonempty(),
  number: z.string().nonempty(),
  message: z.string().nonempty(),
});

export function Form({ isFooter = false }: { isFooter?: boolean }) {
  console.log(isFooter);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const submitHandler = (data: FormValues) => {
    console.log(data);
  };
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
      <label>Phone number</label>
      <input
        className=" border-2 border-slate-200 rounded-md py-2 px-3"
        placeholder="+91-1234567890"
        {...register("number", { required: true })}
      />
      {!isFooter && (
        <>
          <label className="">Pincode</label>
          <input
            className=" border-2 border-slate-200 rounded-md py-2 px-3"
            {...register("message", { required: true })}
            placeholder="Please share your pincode"
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
