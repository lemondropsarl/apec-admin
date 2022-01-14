import Link from "next/link";
import React from "react";

const SidebarMenu = () => {
  return (
    <li className="mr-3 flex-1">
      <Link href="">
        <a
          href="#"
          className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
        >
          <i className="fas fa-tasks pr-0 md:pr-3"></i>
          <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
            Tasks
          </span>
        </a>
      </Link>
    </li>
  );
};

export default SidebarMenu;
