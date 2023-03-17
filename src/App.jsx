import React from "react";
import Header from "./componens/Header";
import Main from "./componens/Main";
import Orders from "./componens/Orders";
import SideBar from "./componens/SideBar";

function App() {
  return (
    <div className="max-w-[1600px] m-auto">
      <div className="bg-background w-full min-h-screen">
        <SideBar />
        <Main />
        <Header />
        <Orders />
      </div>
    </div>
  );
}

export default App;
