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
        } bg-secundary lg:right-0 fixed top-0 w-full  h-full  lg:w-[400px]  m-b-6 p-4 whitespace-nowrap transition-all`}
      >
        {/**TITLE PRICE */}
        <div className="absolute w-full left-0 top-0  bg-secundary border-b border-gray-600">
          <div className="p-4 sm:py-4 sm:px-12  flex flex-col gap-6">
            <div>
              <h1 className="text-gray-200 text-2xl font-medium">
                Orders #34569
              </h1>
            </div>
            <div className="flex gap-3">
              {/**BUTTONS */}
              <button className="text-white bg-primary px-4 py-2 rounded-lg active:text-white active:bg-primary ">
                Dine in
              </button>
              <button className="px-4 py-2 text-primary border border-gray-500 rounded-lg lg:hover:bg-primary lg:hover:text-white transition-all active:text-white active:bg-primary">
                To go
              </button>
              <button className="px-4 py-2 text-primary border border-gray-500 rounded-lg lg:hover:bg-primary lg:hover:text-white transition-all  active:text-white active:bg-primary">
                Delivery
              </button>
              <button
                className="absolute top-4 right-4 bg-background text-3xl  p-2  rounded-full lg:hidden active:text-white"
                onClick={() => {
                  setShowOrders(false);
                }}
              >
                <RiCloseFill />
              </button>
            </div>

            {/**TABS */}
            <div className="grid grid-cols-6 text-white text-xl  pb-4 ">
              <div className="col-span-4">Item</div>
              <div>
                <h1>Qty</h1>
              </div>
              <div>Price</div>
            </div>
          </div>
        </div>
        {/**Products */}
        <div className="absolute p-6 left-1/2 -translate-x-1/2 -z-10  pt-[400px] bottom-[180px] right-0  w-[100%] md:w-[80%] lg:w-[100%] h-[100%]  flex flex-col  overflow-y-scroll ">
          <div className="product-Orders">
            <OrdersProduct
              img="combo.png"
              title="special combo"
              price="$ 8"
              quantity="2"
              total="$ 16.0"
            />

            <OrdersProduct
              img="burger.png"
              title="Burguer"
              price="$ 3"
              quantity="2"
              total="$ 6,0"
            />

            <OrdersProduct
              img="saludable.png"
              title="healthy dish"
              price="$ 3,0"
              quantity="3"
              total="$ 9,0"
            />

            <OrdersProduct
              img="plato1.png"
              title="Spicy seasoned.."
              price="$ 2,69"
              quantity="1"
              total="$ 2,69"
            />
          </div>
        </div>

        {/**CONTAINER-PAGO */}
        <div className="absolute w-full left-0  bottom-0  border-t rounded-2xl border-gray-700 flex flex-col  gap-4 p-4 md:px-[15%] lg:p-4 z-20 bg-secundary">
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
