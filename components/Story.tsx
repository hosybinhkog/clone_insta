import { NextPage } from "next";
import React from "react";
import { Suggestion } from "../types";

interface StoryProps {
  suggestion: Suggestion;
}

const Story: NextPage<StoryProps> = ({ suggestion }) => {
  const { username, avatar } = suggestion;

  return (
    <div>
      <img
        className="h-14 w-14 object-contain rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transiton duration-200 ease-out"
        src={avatar ?? suggestion}
        alt="username"
      />
      <p className="text-xs  w-14 truncate text-gray-600 text-center">
        {username}
      </p>
    </div>
  );
};

export default Story;
