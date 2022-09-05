import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Admit Avatar", href: "/avatar", current: true },
  { name: "Admit Studio", href: "/studio", current: false },
  { name: "Lounge", href: "/lounge", current: false },
  { name: "Våre rådgivere", href: "/consult", current: false },
  { name: "Om Admit ", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white transition-all duration-400">
      {({ open }) => (
        <div
          data-cursor-size="10px"
          data-cursor-color="#FF595A"
          data-cursor-exclusion
          className="transition-colors duration-400"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 transition-all duration-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 transition-all duration-400"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <a
                href="/"
                className="flex-shrink-0 cursor-pointer translate-x-10 items-start justify-center left-0 sm:hidden md:flex md:translate-x-5"
              >
                {/* <img
                    className="block lg:hidden h-6 w-auto"
                    src="https://uploads-ssl.webflow.com/602535e288aec462623e79b5/608168cc4904e8cfd98c68fe_Admit%20logo%202020%20farger.png"
                    alt="Workflow"
                  /> */}
                <img
                  className="hidden cursor-pointer lg:block h-8 w-auto"
                  src="https://uploads-ssl.webflow.com/602535e288aec462623e79b5/608168cc4904e8cfd98c68fe_Admit%20logo%202020%20farger.png"
                  alt="Workflow"
                />
              </a>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-black hover:bg-admit-red hover:text-white border-2  "
                            : "text-black hover:bg-admit-red hover:text-white border-2  ",
                          "px-3 py-2 rounded-full text-sm font-medium transition-all duration-400 border-2 "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://calendly.com/admitas/"
                  className="inline-flex items-center bg-admit-red  border-0 py-2 px-6 focus:outline-none hover:outline transition-b duration-400 hover:bg-admit-blue text-white rounded-full text-sm font-base mt-0 md:mt-0"
                >
                  Booking
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1 animate-pulse"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-admit-blue flex flex-row rounded-br-2xl transition-all duration-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-white hover:bg-admit-red hover:text-gray-300 transition-colors duration-400",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
