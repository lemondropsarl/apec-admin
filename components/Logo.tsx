import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="items-center  text-white justify-center">
        <Link href="#">
          <a href="#" aria-label="Home" className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
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
            <h1 className=" text-xl pl-2">APEC MANAGEMENT</h1>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Logo;
