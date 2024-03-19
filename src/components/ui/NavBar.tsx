"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src="/logo.svg" width={70} height={70} alt="logo" />
                <h2 className="text-2xl text-cyan-600 font-bold "></h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-l text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-black-900  md:hover:text-neutral-300 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    О фонде
                  </Link>
                </li>
                <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-black-600  border-purple-900  md:hover:text-neutral-300 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Гранты
                  </Link>
                </li>
                <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-black-600  border-purple-900  md:hover:text-neutral-300 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Образование
                  </Link>
                </li>
                <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-black-600  border-purple-900  md:hover:text-neutral-300 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Аналитика
                  </Link>
                </li>
                <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-black-600  border-purple-900  md:hover:text-neutral-300 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Новости
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;