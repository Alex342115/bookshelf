import React from "react";
import backgroundSVG from "../Assests/Vector 2.svg";
import { Link } from "react-router-dom";
import logo from "../Assests/Logo 1.svg";

export default function NewUser() {
  return (
    <div className="login relative flex fe justify-center items-center w-full h-screen text-black bg-[#F3F3F7]">
      <img
        src={backgroundSVG}
        alt="background"
        className="absolute bottom-0 drop-shadow-[0_40px_30px_rgba(245,96,86,0.5)]"
      />
      <div className="w-1/4 h-5/6 z-20 bg-white rounded-lg drop-shadow-2xl flex flex-col gap-3 justify-center items-center">
        <h1 className="text-2xl font-semibold">
          <span className="text-red-400 text-3xl">Book </span> 
          <span className="text-4xl tracking-widest">Flix</span>
        </h1>
        <h2>Registration</h2>
        <h3 className="pb-1 text-slate-400">For Both Staff & Students</h3>

        <form className="flex flex-col gap-1 w-3/4">
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Reg No.</h2>
            <input
              type="number"
              name="regno"
              placeholder="College Registration Number"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">College Email ID</h2>
            <input
              type="email"
              name="email"
              placeholder="username@collegename.ac.in"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Password</h2>
            <input
              type="password"
              name="password"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <label>
            {" "}
            <h2 className="font-semibold mb-1">Confirm Password</h2>
            <input
              type="password"
              name="password"
              className="border-2 w-full h-10 rounded-lg p-3"
            />
          </label>
          <input
            type="submit"
            value="Register"
            className="bg-red-400 text-white h-10 rounded-lg mt-2"
          />
        </form>

        <div className="flex justify-between w-3/4">
          <h1 className="text-sm">
            Already a User?
            <span>
              <Link to="/" className="underline">
                Login No
              </Link>
            </span>
          </h1>
          <h1 className="text-sm"> Use as Guest</h1>
        </div>
      </div>
    </div>
  );
}
