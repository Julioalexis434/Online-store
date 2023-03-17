import React from "react";
import Orders from "./componens/Orders";
import SideBar from "./componens/SideBar";
import { useState } from "react";
function App() {
  const [menu, setmenu] = useState(false);
  const [showOrders, setShowOrders] = useState(true);
  return (
    <div>
      <div className="bg-background w-full min-h-screen">
        <SideBar menu = {menu} setmenu = {setmenu} setShowOrders ={setShowOrders} />
        <Orders showOrders = {showOrders} setShowOrders = {setShowOrders} />
      </div>
    </div>
  );
}

export default App;
