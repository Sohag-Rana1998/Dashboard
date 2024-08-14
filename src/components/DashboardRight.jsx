import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsMenuButtonFill } from "react-icons/bs";
const DashboardRight = () => {
  return (
    <div className=" w-full">
      <div className="flex gap-5">
        <div className="w-full md:w-[40%]">
          <div className="w-full p-6  bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] rounded-[20px] flex items-center justify-center gap-3 ">
            <div className="text-white">
              <h3 className="text-xl font-medium">
                Foundations of User Experience <br /> (UX) Design
              </h3>
              <div className="flex gap-5 items-end">
                <div>
                  <div className="text-sm font-medium flex items-center gap-3">
                    <p>
                      {" "}
                      <span>04 </span>
                      <span>Assignment</span>
                    </p>
                    <p>
                      <li className="list-disc">
                        {" "}
                        <span>20 </span>
                        <span>Videos</span>
                      </li>
                    </p>
                  </div>
                  <div className="mt-10">
                    <button className="btn bg-white w-full rounded-[42px] ">
                      Continue Course
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    className="radial-progress text-[#1B2A68] "
                    style={{
                      "--value": "65",
                      "--size": "6rem",
                      "--thickness": "1rem",
                    }}
                    role="progressbar"
                  >
                    <div className="text-center flex flex-col items-center justify-center bg-white m-3 p-2 rounded-full">
                      <span className="font-bold">80%</span>
                      <span className="text-[6px]">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full group p-6 mt-5 border hover:text-white border-1 border-[#4163E9] shadow-sm bg-[#F7F7FF]  hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] rounded-[20px] flex items-center justify-center gap-3 ">
            <div className="">
              <h3 className="text-xl font-medium">
                Start the UX Design Process: <br /> Empathize, Define, and
                Ideate
              </h3>
              <div className="flex gap-5 items-end">
                <div>
                  <div className="text-sm font-medium flex items-center gap-3">
                    <p>
                      {" "}
                      <span>04 </span>
                      <span>Assignment</span>
                    </p>
                    <p>
                      <li className="list-disc">
                        {" "}
                        <span>20 </span>
                        <span>Videos</span>
                      </li>
                    </p>
                  </div>
                  <div className="mt-10">
                    <button className="btn bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] hover:bg-white w-full rounded-[42px] ">
                      Continue Course
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    className="radial-progress text-[#1B2A68] "
                    style={{
                      "--value": "65",
                      "--size": "6rem",
                      "--thickness": "1rem",
                    }}
                    role="progressbar"
                  >
                    <div className="text-center flex flex-col items-center justify-center bg-white m-3 p-2 rounded-full">
                      <span className="font-bold">65%</span>
                      <span className="text-[6px]">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 mt-5 border border-1 border-[#4163E9] shadow-sm bg-[#F7F7FF]  hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] rounded-[20px] flex items-center justify-center gap-3 hover:text-white">
            <div className="">
              <h3 className="text-xl font-medium">
                Build Wireframes and Low- <br />
                Fidelity Prototypes
              </h3>
              <div className="flex gap-5 items-end">
                <div>
                  <div className="text-sm font-medium flex items-center gap-3">
                    <p>
                      {" "}
                      <span>04 </span>
                      <span>Assignment</span>
                    </p>
                    <p>
                      <li className="list-disc">
                        {" "}
                        <span>20 </span>
                        <span>Videos</span>
                      </li>
                    </p>
                  </div>
                  <div className="mt-10">
                    <button className="btn bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] hover:bg-white w-full rounded-[42px] ">
                      Continue Course
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    className="radial-progress text-[#1B2A68] "
                    style={{
                      "--value": "65",
                      "--size": "6rem",
                      "--thickness": "1rem",
                    }}
                    role="progressbar"
                  >
                    <div className="text-center flex flex-col items-center justify-center bg-white m-3 p-2 rounded-full">
                      <span className="font-bold">85%</span>
                      <span className="text-[6px]">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%] ">
          <div className="flex items-center gap-5">
            <div className="border bg-[#F7F7FF)] rounded-[20px] p-5">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-5xl font-semibold text-[#072F33]">12</h2>
                  <h4 className="mt-5 font-medium">Completed Course</h4>
                </div>
                <div>
                  <div className="">
                    <FaGraduationCap className="text-5xl text-[#4163E9]" />
                    <h4 className="font-medium flex items-center gap-3 ">
                      04% lncrease <FaArrowTrendUp />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border bg-[#F7F7FF)] rounded-[20px] p-5">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-5xl font-semibold text-[#072F33]">20</h2>
                  <h4 className="mt-5 font-medium">Completed Course</h4>
                </div>
                <div>
                  <div className="">
                    <BsMenuButtonFill className="text-5xl text-[#4163E9]" />
                    <h4 className="font-medium flex flex-row items-center gap-1 ">
                      20% lncrease <FaArrowTrendUp />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
