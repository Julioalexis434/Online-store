import React from "react";
import Orders from "./componens/Orders";
import SideBar from "./componens/SideBar";
import { useState } from "react";
import Main from "./componens/Main";
function App() {
  const [menu, setmenu] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  return (
    <div>
      <div className="bg-background w-full ">
        <Main />
        <SideBar menu={menu} setmenu={setmenu} setShowOrders={setShowOrders} />
        <Orders showOrders={showOrders} setShowOrders={setShowOrders} />
      </div>
    </div>
  );
}

export default App;