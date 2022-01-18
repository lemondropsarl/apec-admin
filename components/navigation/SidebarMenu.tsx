import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  menuList: {
    Id: number;
    name: string;
    path: string;
    icon?:string;
  }[];
}

function SidebarMenu({ menuList }: IProps) {
  return (
    <>
      {menuList.map((menu) => (
        <li className="mr-2 flex px-2" key={menu.Id}>
          <Link href={menu.path}>
            <a className="flex py-1 md:py-3 pl-1 items-center text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500 w-full ">
              <i className={`${menu.icon} pr-0 md:pr-3 `}></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 ">
                {menu.name}
              </span>
            </a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default SidebarMenu;
