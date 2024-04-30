import React from "react";
import backgroundSVG from "../Assests/Vector 2.svg";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Dashboard() {
  return (
    <div className="dashboard h-screen w-full flex justify-center items-center">
      <img
        src={backgroundSVG}
        alt="background"
        className="absolute z-5 bottom-0 drop-shadow-[0_40px_30px_rgba(245,96,86,0.5)]"
      />
      <div
        className=" h-[53rem] w-[150rem] bg-white z-10 mx-9 
                        rounded-xl drop-shadow-2xl flex"
      >
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
