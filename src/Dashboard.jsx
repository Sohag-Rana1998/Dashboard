import React from "react";

import DashboardRight from "./components/DashboardRight";
import NavigationMenu from "./components/NavigationMenu";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex items-start gap-5 h-screen max-w-7xl w-full mx-auto ">
      <div>
        <NavigationMenu />
      </div>
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div>
          <DashboardRight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
