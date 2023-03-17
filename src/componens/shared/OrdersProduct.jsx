import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
function OrdersProduct() {
  const [boton, setboton] = useState(false);
  return (

      <>
        <div className="bg-secundary p-4 flex flex-col gap-2 mb-4">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 flex gap-2">
              {/**LEFT */}
              <div className=" w-[40px]">
                <img src="../../public/plato1.png" alt="" />
              </div>
              <div className="text-white">
                <h1>Salted pasta with mu...</h1>
                <span className="text-gray-500 font-medium">$ 2,69</span>
              </div>
            </div>
            {/**RIGHT*/}
            <div className="bg-background text-white flex justify-center items-center text-xl rounded-xl font-extralight">
              1
            </div>
            <div className=" text-white flex justify-center items-center text-xl rounded-xl font-extralight">
              $2,69
            </div>
          </div>

          <div className="grid grid-cols-6 h-12 w-full gap-2">
            <form className="col-span-5">
              <input
                type="text"
                className="w-full h-full px-4 text-xl outline-none rounded-lg bg-tercero text-white"
              />
            </form>
            <div className="flex items-center justify-center text-2xl text-primary border border-primary rounded-lg xl:hover:text-secundary  xl:hover:bg-primary xl:hover:border-tercero">
              <RiDeleteBin6Line />
            </div>
          </div>
        </div> 
    </>
  );
}

export default OrdersProduct;
