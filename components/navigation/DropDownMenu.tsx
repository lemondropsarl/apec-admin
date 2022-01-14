import React from 'react'
import Link from 'next/link'
const DropDownMenu = () => {
    return (
      <>
        <div className="absolute bg-gray-800 text-white p-3 overflow-auto z-30 right-0 items-center">
          <Link href="">
            <a className="flex p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline">
              <i className="fa fa-user fa-fw "></i> Profile
            </a>
          </Link>
          <Link href="">
            <a className="flex p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline">
              <i className="fa fa-cog fa-fw "></i> Paramètres
            </a>
          </Link>
          <div className="border border-border-gray-800"></div>
          <Link href="">
            <a className="flex p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline">
              <i className=""></i>Log Out
            </a>
          </Link>
        </div>
      </>
    );
}

export default DropDownMenu
