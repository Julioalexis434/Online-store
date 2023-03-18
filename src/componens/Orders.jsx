import React from "react";
import OrdersProduct from "./shared/OrdersProduct";
import { RiCloseFill } from "react-icons/ri";
function Orders(props) {
  const { showOrders, setShowOrders } = props;
  return (
    <>
      {/**Container */}
      <div
        className={`${
          showOrders ? "right-0" : "-right-full"
        } bg-secundary lg:right-0 fixed top-0 w-full  h-full  lg:w-[450px]  m-b-6 p-4 whitespace-nowrap transition-all`}
      >
        {/**TITLE PRICE */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-gray-200 text-2xl font-medium">
              Orders #34569
            </h1>
          </div>
          <div className="flex gap-3">
            {/**BUTTONS */}
            <button className="text-white bg-primary px-4 py-2 rounded-lg">
              Dine in
            </button>
            <button className="px-4 py-2 text-primary border border-gray-500 rounded-lg hover:bg-primary hover:text-white transition-all ">
              To go
            </button>
            <button className="px-4 py-2 text-primary border border-gray-500 rounded-lg hover:bg-primary hover:text-white transition-all  ">
              Delivery
            </button>
            <button
              className="absolute top-6 right-6 bg-background text-3xl  p-2  rounded-full lg:hidden"
              onClick={() => {
                setShowOrders(false);
              }}
            >
              <RiCloseFill />
            </button>
          </div>

          {/**TABS */}
          <div className="grid grid-cols-6 text-white text-xl border-b border-gray-600 pb-4 mb-4">
            <div className="col-span-4">Item</div>
            <div>
              <h1>Qty</h1>
            </div>
            <div>Price</div>
          </div>
        </div>

        {/**Products */}
        <div className="flex flex-col gap-2 h-[400px] overflow-y-scroll md:h-[65%] lg:h-[400px]">
          <div>
            <OrdersProduct
              title="Coca cola chicken"
              price="$ 2,69"
              quantity="1"
              total="$ 2,69"
            />
          </div>

          <div>
            <OrdersProduct
          
              title="Coca cola chicken"
              price="$ 3,0"
              quantity="2"
              total="$ 6"
            />
          </div>

          <div>
            <OrdersProduct
              title="Coca cola chicken"
              price="$ 2,69"
              quantity="1"
              total="$ 2,69"
            />
          </div>

          <div>
            <OrdersProduct
              title="Coca cola chicken"
              price="$ 2,69"
              quantity="1"
              total="$ 2,69"
            />
          </div>

          <div>
            <OrdersProduct
              title="Coca cola chicken"
              price="$ 2,69"
              quantity="1"
              total="$ 2,69"
            />
          </div>
    
        </div>

        {/**Pago */}
        <div className="absolute w-full left-0  bottom-0  border-t rounded-2xl border-gray-700 flex flex-col  gap-4 p-4 z-20 bg-secundary">
          <div className="w-full flex justify-between text-white">
            <span className="text-gray-500">Discount</span>
            <h2>$0</h2>
          </div>

          <div className="flex justify-between text-white mb-2 ">
            <span className="text-gray-500">Sub total</span>
            <h2>$21,03</h2>
          </div>

          <div className="text-center ">
            <button className="bg-primary rounded-xl py-3 w-full text-white">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
