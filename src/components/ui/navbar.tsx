"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";

function Navigationbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <Popover
      className={"container mx-auto flex items-center border-b2 px-6 py-3 h-24"}
    >
      <Link href="/">
        <Image src="/logo.svg" width={70} height={70} alt="logo" />
      </Link>

      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">О фонде</Link>
          <Link href="/">Гранты</Link>
          <Link href="/">Образование</Link>
          <Link href="/">Аналитика</Link>
          <Link href="/">Новости</Link>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
          <Popover.Overlay className="sm:hidden fixed inset-0 bg-white opacity-30" />
          <Transition
            as={Fragment}
            enter="duration-100 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-o scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right h-full transform p-2 transition md:hidden"
            >
              <div className="h-full rounded-lg bg-black ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <Image
                        src="/logo.svg"
                        width={70}
                        height={70}
                        alt="logo"
                      />
                    </Link>
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      О фонде
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      Гранты
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      Образование
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      Аналитика
                    </Link>
                    <Link
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                      href="/"
                    >
                      Новости
                    </Link>
                  </nav>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </div>
    </Popover>
  );
}

export default Navigationbar;