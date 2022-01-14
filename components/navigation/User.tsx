import React, { FC, useState } from "react";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

const User: React.FC = () => {
    const [downMenu, setdownMenu] = useState<Boolean>(false)
    const handleDropDownMenu = () => {
        setdownMenu(!downMenu)
    }
     
  return (
    <>
      <div className="relative inline-block">
              <button className=" text-white py-2 px-2" onClick={handleDropDownMenu}>
          Hi, User
          <svg
            className="h-3 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        { (downMenu) ? <DropDownMenu/> : ' ' }
      </div>
    </>
  );
};

export default User;
