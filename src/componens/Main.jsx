import React from "react";
import Header from "./Header";
import { RiArrowDownSLine } from "react-icons/ri";
import MainProduct from "./shared/MainProduct";
function Main() {
  return (
    <div className="w-full min-full lg:pl-24 lg:pr-[450px] ">

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
      <main className=" h-full px-8 py-3 min-[280px]:px-4 max-w-[1800px] m-auto ">
        {/**Body */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:pb-12  gap-8 gap-y-40 lg:min-w-[850px] min-w-[250px] pb-28  ">
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
          <MainProduct />
        </div>
      </main>
    </div>
  );
}

export default Main;
