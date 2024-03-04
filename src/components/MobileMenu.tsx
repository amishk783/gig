import Link from "next/link";
export function MobileMenu() {
  return (
    <div className="flex flex-col pt-4 px-2 justify-center items-center space-y-3 text-white text-lg  ">
      <Link className="" href="/">Home</Link>
      <Link className="" href="/">About us</Link>
      <Link href="/">Contact us</Link>
    </div>
  );
}
