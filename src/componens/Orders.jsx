import React from "react";

function Orders() {
  return (
    <div className="bg-secundary fixed right-0 top-0 w-full  h-full  lg:w-[400px] z-24">
          {/**TITLE PRICE */}
      <div className="flex flex-col gap-6 p-4">
        <div>
          <h1 className="text-gray-200 text-2xl font-medium">Orders #34569</h1>
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
        </div>

          {/**TABS */}
        <div className="grid grid-cols-6 text-white text-xl border-b border-gray-500  py-4">
          <div className="col-span-4">Item</div>
          <div><h1>Qty</h1></div>
          <div>Price</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
