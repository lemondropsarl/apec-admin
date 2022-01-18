import Link from "next/link";
import Logo from "../Logo";
import User from "./User";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-gray-800 h-auto px-1 fixed w-full pt-1 pb-1 md:pt-1 top-0 z-20">
          <div className="flex flex-wrap justify-between px-2 p-1 items-center">
            <Logo />

            <div className="px-4 text-white flex flex-1 md:w-1/3 justify-center md:justify-start items-center h-auto">
              <form method="GET">
                <div className="relative text-gray-600 focus-within:text-gray-400 min-w-full md:w-1/3">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none focus:shadow-outline">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="search"
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
            <User />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
