import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";

import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <div>
      <nav className="container relative flex flex-row items-center justify-between p-2 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between w-full p-4 mt-5">
                <Link href="/">
                  <a>
                    <span>
                      <Image
                        src="/img/logo.png"
                        alt="logo "
                        width="150"
                        height="60"
                        className="scale-90 hover:scale-100 duration-700"
                      />
                    </span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className=" justify-items-end px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap ju w-full my-5 lg:hidden">
                  <div>
                    {/* {navigation.map((Service, index) => (
                      <Link key={index} href="/service">
                        <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                          {Service}
                        </a>
                      </Link>
                    ))} */}
                    {/* <Link href="/">
                      <a className="flex w-full px-4 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">
                        contact
                      </a>
                    </Link> */}
                    {/* <Link href="/service" passHref>
                      <a className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        Service
                      </a>
                    </Link>
                    <Link href="/proyek" passHref>
                      <a className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        Proyek
                      </a>
                    </Link> */}

                    <a
                      href="#service"
                      className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                     
                    </a>

                    <a
                      href="#benefit"
                      className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                      
                    </a>

                    <a
                      href="#testimoni"
                      className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                      
                    </a>

                    <a
                      href="#kontak"
                      className="flex w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                      
                    </a>
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        {/* <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className=" flex mr-3 nav__item">
              <a
                href="#service"
                className="px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
              >
                Satu
              </a>
              <a
                href="#benefit"
                className="px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
              >
                Dua
              </a>
              <a
                href="#testimoni"
                className="px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
              >
                Tiga
              </a>
              <a
                href="#kontak"
                className="px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
              >
                Empat
              </a>
            </li>
          </ul>
        </div> */}
        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
