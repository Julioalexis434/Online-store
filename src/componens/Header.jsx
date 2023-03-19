import React from "react";
import { RiSearchLine } from "react-icons/ri";
function Header() {
  return (
    <>
      <div className="p-4 l">
        {/**Header */}
        <div className=" flex flex-col md:flex-row w-full md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-medium text-gray-200">
              Riverside Flamez
            </h1>
            <span className="text-gray-500 text-lg">16 / Mar / 2023</span>
          </div>

          <form>
            <div className="relative">
              <RiSearchLine className="absolute text-xl  top-1/2 -translate-y-1/2 left-6 text-white" />
              <input
                type="text"
                placeholder="Search for food, coffe, etc.."
                className="bg-tercero px-4 py-2 pl-14  text-white  rounded-lg outline-none w-full "
              />
            </div>
          </form>
        </div>
        {/**TABS */}
        <div className="flex justify-between md:justify-start md:gap-12 text-white border-b border-gray-700 mb-3 ">
          <div className="relative">
            <h1 className="text-primary py-4 cursor-pointer">
              Hot Dishes
            </h1>
          </div>
          <div className="relative transition-all active:text-primary xl:hover:text-primary cursor-pointer">
            <h1 className=" py-4">Cold Dises</h1>
          </div>
          <div className="relative transition-all active:text-primary xl:hover:text-primary cursor-pointer">
            <h1 className=" py-4">Soup</h1>
          </div>
          <div className="relative transition-all active:text-primary xl:hover:text-primary cursor-pointer">
            <h1 className=" py-4">Grill</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;