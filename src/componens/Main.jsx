import React from "react";
import Header from "./Header";
import NavMovil from "./NavMovil";

function Main() {
  return (
    <main className="w-full h-screen lg:pl-24 lg:pr-[390px] ">
      <Header />
      <NavMovil/>
    </main>
  );
}

export default Main;
