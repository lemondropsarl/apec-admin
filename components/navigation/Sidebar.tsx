import React from "react";
import { menuItems } from "../../constants/menuItems";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <>
      <nav className="bg-gray-800 shadow-xl md:left-0 md:top-0 text-left basis-2/12 md:basis-3/12 pt-16 h-screen">
        <div className="items-center px-4">
          <ul className="flex-col md:items-center md:justify-between md:text-center">
            <SidebarMenu menuList={menuItems} />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
