import Link from "next/link";
export function MobileMenu() {
  return (
    <div className="flex flex-col pt-4 px-2 justify-center items-center  bg-red-500 space-y-3 text-white text-lg  ">
      <Link className="" href="/">
        Home
      </Link>
      <Link className="" href="/">
        About us
      </Link>
      <Link href="/">Contact us</Link>
      <a
        className="pb-4"
        href="/whatsapp://send?abid=8851103192&text=Hello%2C%20World!"
      >
        Get a Call back
      </a>
    </div>
  );
}
