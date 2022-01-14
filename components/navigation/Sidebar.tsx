import React from "react";
import SidebarMenu from "../Sidebar/SidebarMenu";
const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-col md:flex-row md:items-center md:justify-between md:text-center">
              <SidebarMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
