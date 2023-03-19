import React from "react";

function MainProduct(props) {
  const { img, description, price, quality, buttom } = props;
  return (
    <>
      <div className="container_product-main w-[250px] max-w-[300px]:  bg-secundary rounded-xl  ">
        <div className="h-full justify-between  px-12 py-4 lg:px-2 xl:p-4 max  text-center text-white flex flex-col gap-2  items-center">
          <img
            src={img}
            alt=""
            className="w-24 h-24 object-cover -mt-14 md:w-40 md:h-40 md:object-cover md:-mt-20  lg:w-[100px] lg:h-[100px] lg:-mt-14 xl:w-40 xl:h-40 "
          />
          <h1 className="">{description}</h1>
          <h2>{price}</h2>
          <span className="text-gray-500 mb-4">{quality}</span>

          <button className="bg-primary w-full text-white py-3 xl:py-4 rounded-lg lg:hover:bg-red-300 active:bg-red-300">
            {buttom}
          </button>
        </div>
      </div>
    </>
   
  );
}

export default MainProduct;