import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const Navbar = () => {
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
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 justify-between gap-10 w-full ">
        <div className="flex">
          <div className="drawer  w-14  lg:w-0 mr-2 lg:mr-0">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  w-14  lg:w-0">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-gray-200 !bg-opacity-40 !border-none flex lg:hidden"
              >
                <svg
                  onClick={() => setMenuToggle(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul
                className={`menu bg-base-200 text-base-content min-h-full w-48 p-4`}
              >
                {userLinks}
              </ul>
            </div>
          </div>
          <div>
            <button className="text-2xl font-medium text-[#6C72FF]  focus:outline-none">
              Overview
            </button>
          </div>
        </div>

        <div className="flex-1 w-full  flex justify-end">
          <div className="w-full mr-3 hidden md:block">
            <div className="relative w-full">
              <label htmlFor="search"></label>
              <input
                type="text"
                name="search"
                id="search"
                className="py-3 pl-3 md:pl-10 w-full text-black border mx-auto   bg-[#EFEFEF] rounded-[42px]"
                placeholder="Search..."
              />
              <FaMagnifyingGlass className="absolute left-5 md:left-3  top-4 text-gray-400" />
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3"
            >
              <div className="indicator text-[#4163E9]">
                <IoMdNotificationsOutline className="text-3xl" />
                <span className="badge badge-sm w-2 !rounded-full text-[10px] indicator-item text-white bg-[#4163E9] border-none p-2 left-2 top-2">
                  9+
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span>9+ Notification found</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user image"
                className="w-12 h-12 rounded-full"
              />
              <div className="whitespace-nowrap">
                <h4 className="font-medium">Alexa Calen</h4>
                <h5 className="text-sm text-[#072F33]">Student</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
