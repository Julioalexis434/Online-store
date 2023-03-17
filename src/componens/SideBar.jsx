import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHome, AiOutlinePieChart } from "react-icons/ai";
import {
  RiNotification4Line,
  RiPercentLine,
  RiSettings2Line,
  RiMenu3Fill,
  RiLogoutBoxRLine,
  RiCloseLine,
} from "react-icons/ri";

function SideBar() {
  const [menu, setmenu] = useState(false);
  const [showOrders, setShowOrdes] = useState(false);

  return (
    <>
      {/**SIDEBAR */}
      <aside
        className={`${
          menu ? "left-0" : "-left-full"
        } bg-secundary h-full  w-24 fixed rounded-tr-xl rounded-br-xl flex flex-col justify-between transition-all z-50 lg:left-0 md:w-28 lg:w-24 border-r border-gray-800 lg:border-0`}
      >
        <div>
          <ul className="pl-3 flex flex-col gap-3">
            <li className="p-4 mb-4]">
             <img src="logo.png" alt="Logo" className=" rounded-xl object-content p-2 object-contain w-16 cursor-pointer"  />
            </li>
            <li className="bg-background p-3 rounded-tl-xl rounded-bl-xl">
              <a
                href="#"
                className="bg-primary p-4 flex justify-center rounded-lg text-white"
              >
                <AiOutlineHome className="text-xl" />
              </a>
            </li>

            <li className="p-3 rounded-tl-xl rounded-bl-xl group hover:bg-background ">
              <a
                href="#"
                className=" p-4 flex justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white"
              >
                <RiPercentLine className="text-xl" />
              </a>
            </li>

            <li className="p-3 rounded-tl-xl rounded-bl-xl group hover:bg-background ">
              <a
                href="#"
                className=" p-4 flex justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white"
              >
                <AiOutlinePieChart className="text-xl" />
              </a>
            </li>

            <li className="p-3 rounded-tl-xl rounded-bl-xl group hover:bg-background ">
              <a
                href="#"
                className=" p-4 flex justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white"
              >
                <RiSettings2Line className="text-xl" />
              </a>
            </li>

            <li className="p-3 rounded-tl-xl rounded-bl-xl group hover:bg-background ">
              <a
                href="#"
                className=" p-4 flex justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white"
              >
                <RiNotification4Line className="text-xl" />
              </a>
            </li>
          </ul>
        </div>

        {/*Logout */}
        <div>
          <ul className="pl-3">
            <li className="p-3 rounded-tl-xl rounded-bl-xl group hover:bg-background ">
              <a
                href="#"
                className=" p-4 flex justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white"
              >
                <RiLogoutBoxRLine className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/*NavMovil */}
      <div className="lg:hidden bg-secundary w-full h-20 fixed bottom-0 rounded-tl-xl  rounded-tr-xl transition-all z-40">
        <nav className="h-full text-white flex justify-between  items-center px-2 md:px-8">
          <button href="#" className="text-3xl p-4  text-primary">
            <AiOutlinePieChart />
          </button>
          <button href="#" className="text-3xl p-4  text-primary">
            <RiSettings2Line />
          </button>
          <button
            onClick={() => {
              setmenu(!menu);
            }}
            href="#"
            className="text-3xl p-4  text-primary"
          >
            {menu ? <RiCloseLine className="text-white" /> : <RiMenu3Fill />}
          </button>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
