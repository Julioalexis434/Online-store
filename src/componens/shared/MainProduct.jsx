import React from "react";

function MainProduct() {
  return (
    <>
      <div className="bg-secundary py-4 px-14  md:p-10 lg:h-[400px]  flex flex-col justify-center items-center rounded-xl text-center text-white gap-3 lg:gap-6 relative lg:text-2xl">
        <img
          src="plato1.png"
          alt=""
          className=" w-40 h-40 object-cover -mt-24 lg:-mt-60"
        />
        <h1 className="px-8">Spicy seasoned seafood noodles</h1>
        <h2>$ 2,29</h2>
        <span className="text-gray-500">20 Bowls available</span>

        <button className="bg-primary w-full text-white py-3 lg:py-6 rounded-lg lg:absolute lg:w-[90%] bottom-2">Order now</button>
      </div>
    </>
  );
}

export default MainProduct;
