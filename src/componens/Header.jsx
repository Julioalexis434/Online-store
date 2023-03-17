import React from "react";
import { RiSearchLine } from "react-icons/ri";
function Header() {
  return (
    <>
      <div className=" p-2 flex flex-col md:flex-row md:justify-between">
        {/**Header */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-200">Riverside Flamez</h1>
          <span className="text-gray-500 text-lg">16 / Mar / 2023</span>
        </div>

        <form>
          <div className="relative p-2">
            <RiSearchLine className="absolute text-2xl  top-1/2 -translate-y-1/2 left-6 text-white"/>
            <input type="text" placeholder="Search for food, coffe, etc.." className="bg-tercero p-4 pl-12  text-white  rounded-lg outline-none"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default Header;
