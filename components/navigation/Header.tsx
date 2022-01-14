import Link from "next/link";
import User from "./User";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-gray-800 ot-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
          <div className="flex  flex-wrap justify-between items-center">
            <div className="flex flex-shrink items-center  justify-center md:justify-start text-white space-x-2">
              <Link href="#">
                <a href="#" aria-label="Home" className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                  </svg>
                  APEC MANAGEMENT
                </a>
              </Link>
            </div>
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <input
                  aria-label="search"
                  type="search"
                  id="search"
                  placeholder="Search"
                  className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                />
              </span>
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <User />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
