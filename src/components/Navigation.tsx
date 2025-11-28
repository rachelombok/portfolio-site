"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SmallNavDirectory from "./SmallNavDirectory";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState<string>("concerts");
  const [isSmallNavDirectoryShowing, setIsSmallNavDirectoryShowing] =
    useState<boolean>(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-8 py-8 px-0 uppercase ">
          <Link
            href="/concerts"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Rachel Ombok
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsSmallNavDirectoryShowing((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0">
              <Link
                href="/concerts"
                className={cn(`block py-2 px-3 rounded-sm  md:p-0`, selectedTab == "concerts" ? "text-neutral-800" : "")}
                aria-current="page"
                onClick={() => setSelectedTab("concerts")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-pink-50 ", selectedTab == "concerts" ? "text-neutral-800" : "")}
                >
                  Concerts
                </li>
              </Link>

              <Link
                href="/portraits"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent`, selectedTab == "portraits" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("portraits")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "portraits" ? "text-neutral-800" : "")}>
                  Portraits
                </li>
              </Link>

              <Link
                href="/street"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent`, selectedTab == "street" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("street")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "street" ? "text-neutral-800" : "")}>
                  Street
                </li>
              </Link>

              <Link
                href="/film"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent`, selectedTab == "film" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("film")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "film" ? "text-neutral-800" : "")}>
                  Film
                </li>
              </Link>

              <Link
                href="/events"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent`, selectedTab == "events" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("events")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "events" ? "text-neutral-800" : "")}>
                  Events
                </li>
              </Link>

              <Link
                href="/about"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent font-semibold`, selectedTab == "about" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("about")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "about" ? "text-neutral-800" : "")}>
                  About
                </li>
              </Link>

              <Link
                type="button"
                href="/contact"
                className={cn(`block py-2 px-3 rounded-sm md:border-0 md:p-0 md:dark:hover:bg-transparent font-semibold`, selectedTab == "contact" ? "text-neutral-800" : "")}
                onClick={() => setSelectedTab("contact")}
              >
                <li className={cn("p-2 rounded-sm text-neutral-400 selected:text-neutral-800 font-semibold hover:text-neutral-800 active:bg-pink-200 active:text-gray-50 ", selectedTab == "contact" ? "text-neutral-800" : "")}>
                  Contact
                </li>
              </Link>
              <Link
                href="https://www.instagram.com/rachels.rchive"
                target="_blank"
                rel="noopener noreferrer"
                className="my-auto text-neutral-400 hover:text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </Link>
            </ul>
          </div>
        </div>
      </nav >
      {isSmallNavDirectoryShowing && (
        <SmallNavDirectory setOpen={setIsSmallNavDirectoryShowing} />
      )}
    </div >
  );
};

export default Navigation;
