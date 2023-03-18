import React from "react";

function MainProduct() {
  return (
    <>
      <div className="bg-secundary px-12 py-4 lg:p-2 xl:p-4 rounded-xl text-center text-white flex flex-col gap-2  items-center ">
        <img
          src="plato1.png"
          alt=""
          className="w-24 h-24 object-cover -mt-20 lg:w-24 lg:h-24 lg:-mt-12 md:w-40 md:h-40 md:object-cover md:-mt-20  "
        />
        <h1 className="">Spicy seasoned seafood noodles</h1>
        <h2>$ 2,29</h2>
        <span className="text-gray-500 mb-4">20 Bowls available</span>

        <button className="bg-primary w-full text-white py-3 xl:py-4 rounded-lg">Order now</button>
      </div>
    </>
  );
}

export default MainProduct;
