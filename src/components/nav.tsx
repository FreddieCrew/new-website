import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex lg:mx-auto justify-between w-4/6 bg-red-900 p-2">
      <p className="hidden lg:block">John</p>
      <div className="self-end text-teal-400">
        <ul className="list-none flex flex-row gap-4">
          <li className="flex hover:text-teal-500 underline">
            <Link href="/">home</Link>
          </li>
          <p className="text-white select-none">|</p>
          <li className="flex hover:text-teal-500 underline">
            <Link href="/projects">projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
