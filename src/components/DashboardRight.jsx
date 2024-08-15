import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsMenuButtonFill } from "react-icons/bs";
import BarChart from "./BarChart";
import { GoDotFill } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
const DashboardRight = () => {
  return (
    <div className=" w-full">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Part */}
        <div className="w-full md:w-[40%]">
          {/* First Card */}

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

          {/* Second Card */}
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

          {/* Third Card */}
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

        {/* Right Part */}
        <div className="w-full md:w-[60%] ">
          {/* First Column */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="border w-full bg-[#F7F7FF)] rounded-[20px] p-5">
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
            <div className="shadow w-full bg-[#F7F7FF)] rounded-[20px] p-5">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-5xl font-semibold text-[#072F33]">20</h2>
                  <h4 className="mt-5 font-medium">Completed Course</h4>
                </div>
                <div>
                  <div className="">
                    <BsMenuButtonFill className="text-5xl text-[#4163E9]" />
                    <h4 className="font-medium flex flex-col md:flex-row items-center gap-1 ">
                      20% lncrease <FaArrowTrendUp />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barchart Column */}
          <div className=" bg-[#F7F7FF)]  shadow border rounded-[20px] p-5 mt-5">
            <div className="flex  justify-between items-center gap-3 ">
              <h3 className="text-xl font-medium">Course Activity</h3>
              <ul className="flex items-center gap-3">
                <li className="flex items-center gap-1 text-sm">
                  <GoDotFill className="text-xl text-[#4163E9] " /> Video
                </li>
                <li className="flex items-center gap-1 text-sm">
                  {" "}
                  <GoDotFill className="text-xl text-[#061758] flex items-center gap-1" />{" "}
                  Practice
                </li>
              </ul>
              <div>
                <select className="select w-24 md:w-32 text-xl font-medium">
                  <option disabled selected>
                    Montly
                  </option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
            </div>
            <div className=" max-h-[300px]">
              <BarChart />
            </div>
          </div>

          {/* Table Column */}
          <div className=" bg-[#F7F7FF)] border shadow rounded-[20px] p-5 mt-5">
            <div className="flex  justify-between items-center gap-3 ">
              <h3 className="text-xl font-medium">Reminders</h3>

              <div>
                <select className="select w-24 md:w-32 text-xl font-medium">
                  <option disabled selected>
                    Montly
                  </option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
            </div>
            <div>
              <div className="overflow-x-auto w-full">
                <table className="table border-none">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th className="w-52">Due</th>
                      <th>Faculty</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="flex items-center gap-1 ">
                        <FiBook className="text-[#4163E9] text-[40px] " />
                        <p className="text-[#072F33] whitespace-nowrap">
                          Assignment-1
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1 ">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#272B8F] p-1 text-white">
                          Done
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_17_407)">
                            <path
                              d="M18 12.9998C17.1205 12.9967 16.2646 13.2846 15.5657 13.8187C14.8668 14.3527 14.364 15.1028 14.1358 15.9522C13.9076 16.8017 13.9667 17.7028 14.3038 18.5151C14.641 19.3275 15.2374 20.0056 16 20.4438V23.2768C16 23.4194 16.0422 23.5589 16.1214 23.6775C16.2006 23.7962 16.3133 23.8886 16.4451 23.9432C16.5768 23.9978 16.7219 24.0121 16.8618 23.9843C17.0017 23.9564 17.1302 23.8877 17.231 23.7868L18 23.0188L18.769 23.7868C18.8699 23.8877 18.9984 23.9564 19.1383 23.9843C19.2782 24.0121 19.4232 23.9978 19.555 23.9432C19.6868 23.8886 19.7994 23.7962 19.8786 23.6775C19.9578 23.5589 20.0001 23.4194 20 23.2768V20.4438C20.7627 20.0056 21.359 19.3275 21.6962 18.5151C22.0334 17.7028 22.0924 16.8017 21.8642 15.9522C21.636 15.1028 21.1333 14.3527 20.4344 13.8187C19.7355 13.2846 18.8796 12.9967 18 12.9998Z"
                              fill="#4163E9"
                            />
                            <path
                              d="M12 17C11.9988 15.9464 12.2753 14.9111 12.8018 13.9984C13.3283 13.0858 14.086 12.328 14.9987 11.8016C15.9114 11.2752 16.9467 10.9987 18.0004 11C19.054 11.0013 20.0886 11.2803 21 11.809V5C20.9984 3.67441 20.4711 2.40356 19.5338 1.46622C18.5964 0.528882 17.3256 0.00158786 16 0L8 0C6.67441 0.00158786 5.40356 0.528882 4.46622 1.46622C3.52888 2.40356 3.00159 3.67441 3 5V17C3.00159 18.3256 3.52888 19.5964 4.46622 20.5338C5.40356 21.4711 6.67441 21.9984 8 22H14V21.46C13.3711 20.8996 12.8678 20.2125 12.5231 19.4439C12.1784 18.6752 12.0001 17.8424 12 17ZM8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6H8C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4ZM8 8H16C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9C17 9.26522 16.8946 9.51957 16.7071 9.70711C16.5196 9.89464 16.2652 10 16 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM11 14H8C7.73478 14 7.48043 13.8946 7.29289 13.7071C7.10536 13.5196 7 13.2652 7 13C7 12.7348 7.10536 12.4804 7.29289 12.2929C7.48043 12.1054 7.73478 12 8 12H11C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8946 11.2652 14 11 14Z"
                              fill="#4163E9"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_407">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-[#072F33] whitespace-nowrap">
                          Quiz- 2
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1 ">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="w-36">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#AA571B] p-1 text-white">
                          Coming
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="flex items-center gap-1">
                        <MdNotificationsActive className="text-[#4163E9] text-[40px] rotate-45" />
                        <p className="text-[#072F33] whitespace-nowrap">
                          Last Class
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1 ">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="w-36">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#AA571B] p-1 text-white">
                          Coming
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="flex items-center gap-1 ">
                        <FiBook className="text-[#4163E9] text-[40px] " />
                        <p className="text-[#072F33] whitespace-nowrap">
                          Assignment-4
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1 ">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#272B8F] p-1 text-white">
                          Done
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_17_407)">
                            <path
                              d="M18 12.9998C17.1205 12.9967 16.2646 13.2846 15.5657 13.8187C14.8668 14.3527 14.364 15.1028 14.1358 15.9522C13.9076 16.8017 13.9667 17.7028 14.3038 18.5151C14.641 19.3275 15.2374 20.0056 16 20.4438V23.2768C16 23.4194 16.0422 23.5589 16.1214 23.6775C16.2006 23.7962 16.3133 23.8886 16.4451 23.9432C16.5768 23.9978 16.7219 24.0121 16.8618 23.9843C17.0017 23.9564 17.1302 23.8877 17.231 23.7868L18 23.0188L18.769 23.7868C18.8699 23.8877 18.9984 23.9564 19.1383 23.9843C19.2782 24.0121 19.4232 23.9978 19.555 23.9432C19.6868 23.8886 19.7994 23.7962 19.8786 23.6775C19.9578 23.5589 20.0001 23.4194 20 23.2768V20.4438C20.7627 20.0056 21.359 19.3275 21.6962 18.5151C22.0334 17.7028 22.0924 16.8017 21.8642 15.9522C21.636 15.1028 21.1333 14.3527 20.4344 13.8187C19.7355 13.2846 18.8796 12.9967 18 12.9998Z"
                              fill="#4163E9"
                            />
                            <path
                              d="M12 17C11.9988 15.9464 12.2753 14.9111 12.8018 13.9984C13.3283 13.0858 14.086 12.328 14.9987 11.8016C15.9114 11.2752 16.9467 10.9987 18.0004 11C19.054 11.0013 20.0886 11.2803 21 11.809V5C20.9984 3.67441 20.4711 2.40356 19.5338 1.46622C18.5964 0.528882 17.3256 0.00158786 16 0L8 0C6.67441 0.00158786 5.40356 0.528882 4.46622 1.46622C3.52888 2.40356 3.00159 3.67441 3 5V17C3.00159 18.3256 3.52888 19.5964 4.46622 20.5338C5.40356 21.4711 6.67441 21.9984 8 22H14V21.46C13.3711 20.8996 12.8678 20.2125 12.5231 19.4439C12.1784 18.6752 12.0001 17.8424 12 17ZM8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6H8C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4ZM8 8H16C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9C17 9.26522 16.8946 9.51957 16.7071 9.70711C16.5196 9.89464 16.2652 10 16 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM11 14H8C7.73478 14 7.48043 13.8946 7.29289 13.7071C7.10536 13.5196 7 13.2652 7 13C7 12.7348 7.10536 12.4804 7.29289 12.2929C7.48043 12.1054 7.73478 12 8 12H11C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8946 11.2652 14 11 14Z"
                              fill="#4163E9"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_407">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-[#072F33] whitespace-nowrap">
                          Quiz- 2
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="w-36">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#AA571B] p-1 text-white">
                          Coming
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="flex items-center gap-1">
                        <MdNotificationsActive className="text-[#4163E9] text-[40px] rotate-45" />
                        <p className="text-[#072F33] whitespace-nowrap">
                          Last Class
                          <span className="text-[#072F33] block opacity-50 text-[10px]">
                            Foundations of User Experience...
                          </span>
                        </p>
                      </th>
                      <td className="text-[12px] whitespace-nowrap">
                        5 June 2024
                      </td>
                      <td>
                        {" "}
                        <div className="flex w-28 items-center gap-1 ">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="user image"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="w-36">
                            <h4 className="text-[10px] font-medium">
                              Alexa Calen
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="rounded-lg bg-[#AA571B] p-1 text-white">
                          Coming
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
