import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const NavigationMenu = () => {
  const role = "user";

  const userLinks = (
    <>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <MdDashboard /> Overview
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 ">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <IoBookOutline /> My Course
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <FaGraduationCap /> Completed
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <BiCube />
          Financial Aid
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          <FiDollarSign /> Transactions
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          <BiBarChartAlt2 /> Reports
        </a>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <a className="flex items-center  gap-1   font-semibold rounded-none">
          <FaRegChartBar /> Statistics
        </a>
      </li>
    </>
  );

  return (
    <div className="w-64  h-screen bg-[#F7F7FF] !hidden lg:!block">
      <div>
        <a className="btn btn-ghost text-xl">
          <img src="/Logo.png" alt="site logo" />
          <h3 className="text-[22px] font-semibold">
            {" "}
            <span className="text-[#6C72FF]">ON</span>Course
          </h3>
        </a>
      </div>
      <div className=" flex flex-col justify-between h-full">
        <div>
          <ul className="menu menu-vertical lg:menu-horizontal rounded-none  w-full mt-4 px-0 py-0 space-y-1">
            {role === "user" && userLinks}
          </ul>
        </div>

        <div>
          <ul className="menu menu-vertical lg:menu-horizontal rounded-none  w-full mt-4 px-0 py-0 space-y-1">
            <li className="w-full h-full px-0 py-0 rounded-none">
              <a className="flex items-center  gap-1   font-semibold rounded-none">
                <MdLogout /> Support
              </a>
            </li>
            <li className="w-full h-full px-0 py-0 rounded-none">
              <a className="flex items-center  gap-1   font-semibold rounded-none">
                <IoSettingsOutline /> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
