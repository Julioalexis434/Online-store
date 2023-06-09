import React from "react";
import Header from "./Header";
import { RiArrowDownSLine } from "react-icons/ri";
import MainProduct from "./shared/MainProduct";
function Main() {
  return (
    <div className="w-full  lg:pl-24 lg:pr-[400px] ">
      {/**HEADER */}
      <Header />

      {/**TTILE */}
      <div className="flex  justify-between items-center mb-24 px-6 ">
        <h1 className=" text-white font-medium">Choose Dishes</h1>
        <button className="bg-secundary text-white  p-3 flex items-center gap-4 rounded-xl">
          <RiArrowDownSLine />
          Dine In
        </button>
      </div>
      <main className=" h-full  py-3 min-[280px]:px-4 max-w-[1800px] m-auto  ">
        {/**Body */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  md:pb-28  gap-8 gap-y-40  min-w-[250px] px-8 lg:px-2 xl:px-4 ">
          <MainProduct
            img="plato1.png"
            description="Spicy seasoned seafood noodles"
            price="$ 2,69"
            quality="20 Bowls available"
            buttom="Order now"
          />
          <MainProduct
            img="burger.png"
            description="Burger"
            price="$ 3"
            quality="14 Bowls available"
            buttom="Order now"
          />
          <MainProduct
            img="combo.png"
            description="special combo"
            price="$ 8"
            quality="28 Bowls available"
            buttom="Order now"
          />


          <MainProduct
            img="saludable.png"
            description="healthy dish"
            price="3"
            quality="2 Bowls available"
            buttom="Order now"
          />
                 <MainProduct
            img="plato1.png"
            description="Spicy seasoned seafood noodles"
            price="$ 2,69"
            quality="20 Bowls available"
            buttom="Order now"
          />
          <MainProduct
            img="burger.png"
            description="Burger"
            price="$ 3"
            quality="14 Bowls available"
            buttom="Order now"
          />
          <MainProduct
            img="combo.png"
            description="special combo"
            price="$ 8"
            quality="28 Bowls available"
            buttom="Order now"
          />


          <MainProduct
            img="saludable.png"
            description="healthy dish"
            price="$ 3"
            quality="2 Bowls available"
            buttom="Order now"
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
