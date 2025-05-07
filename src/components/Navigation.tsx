import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-10 px-0 uppercase">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Rachel Ombok
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <Link
                href="/concerts"
                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 focus:bg-gray-200"
                aria-current="page"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">
                  Concerts
                </li>
              </Link>

              <Link
                href="/portraits"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">Portraits</li>
              </Link>

              <Link
                href="/street"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">Street</li>
              </Link>

              <Link
                href="/film"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">Film</li>
              </Link>

              <Link
                href="/events"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">Events</li>
              </Link>

              <Link
                href="/about"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent font-bold focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">About</li>
              </Link>

              <Link
                type="button"
                href="/contact"
                className="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent font-bold focus:bg-gray-200"
              >
                <li className="p-2 rounded-sm hover:bg-gray-200 active:bg-pink-200 active:text-gray-50">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
