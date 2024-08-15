import React from "react";

import DashboardRight from "./components/DashboardRight";
import NavigationMenu from "./components/NavigationMenu";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex items-stretch gap-5 max-w-[1320px] w-full mx-auto font-poppins">
      <div>
        <NavigationMenu />
      </div>
      <div className="w-full h-screen overflow-y-scroll">
        <div>
          <Navbar />
        </div>
        <div className="mt-5">
          <DashboardRight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
