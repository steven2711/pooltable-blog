import Link from "next/link";
import Search from "./Search";
import { useState } from "react";
import Hamburger from "./Hamburger";
import MobileOpen from "./MobileOpen";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-100 w-full fixed top-0 left-0 z-50">
      <div className="mx-auto flex py-5  px-8 flex-row justify-between items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start">
            <span className="text-xl lg:text-2xl">anything pool tables</span>
          </a>
        </Link>
        <nav className="hidden xl:flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/pool-cues">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              pool cues
            </a>
          </Link>
          <Link href="/pool-tables">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              pool tables
            </a>
          </Link>
          <Link href="/billiard-balls">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              billiard balls
            </a>
          </Link>
          <Link href="/how-to-play">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              how to play
            </a>
          </Link>
          <Link href="/accessories">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              accessories
            </a>
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Search />
        </div>
        <button className="xl:hidden" onClick={() => setOpen(!open)}>
          <Hamburger open={open} />
        </button>
      </div>

      {open ? <MobileOpen /> : null}
    </header>
  );
}
