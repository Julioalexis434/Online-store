import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";


function OrdersProduct(props) {
  const {img,title, price, quantity, total} = props
  const [boton, setboton] = useState(false);
  return (
      <>
        <div className=" p-4 flex flex-col gap-2 mb-4 bg-background rounded-xl">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 flex gap-2">
              {/**LEFT */}
              <div className=" w-[40px]">
                <img src={img} alt="" />
              </div>
              <div className="text-white">
                <h1>{title}</h1>
                <span className="text-gray-500 font-medium">{price}</span>
              </div>
            </div>
            {/**RIGHT*/}
            <div className="text-white flex justify-center items-center text-xl rounded-xl font-extralight">
              {quantity}
            </div>
            <div className=" text-white flex justify-center items-center text-xl rounded-xl font-extralight">
            {total}
            </div>
          </div>

          <div className="grid grid-cols-6 h-12 w-full gap-2">
            <form className="col-span-5">
              <input
                type="text"
                className="w-full h-full px-4 text-xl outline-none rounded-lg bg-tercero text-white" placeholder="Order Note"
              />
            </form>
            <div className="flex items-center justify-center text-2xl text-primary border border-primary rounded-lg xl:hover:text-secundary  xl:hover:bg-primary xl:hover:border-tercero active:text-white active:bg-primary"> 
              <RiDeleteBin6Line />
            </div>
          </div>
        </div> 
    </>
  );
}

export default OrdersProduct;