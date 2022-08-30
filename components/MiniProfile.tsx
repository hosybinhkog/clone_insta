import { NextPage } from "next";
import React from "react";

const MiniProfile: NextPage = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10 space-x-2">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg?crop=0.691xw:0.776xh;0.204xw,0.180xh&resize=640:*"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Lamborghini</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;
