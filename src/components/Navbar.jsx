import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between gap-10 w-full ">
        <div className="flex">
          <div>
            <button className="text-2xl font-medium text-[#6C72FF] mr-16 focus:outline-none">
              Overview
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full mr-5">
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
              className="btn btn-ghost btn-circle mr-5"
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
              <div className="w-36">
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
