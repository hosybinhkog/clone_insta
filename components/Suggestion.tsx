import { NextPage } from "next";
import React from "react";
import { Suggestion } from "../types";

interface SuggestionProps {
  suggestion: Suggestion;
}

const Suggestion: NextPage<SuggestionProps> = ({
  suggestion,
}: SuggestionProps) => {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        className="h-10 w-10 rounded-full border p-[2px] cursor-pointer"
        src={suggestion.avatar}
        alt={suggestion.username}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{suggestion.username}</h2>
        <h3 className="text-xs text-gray-400">Works at {suggestion.email}</h3>
      </div>
      <button className="text-blue-400 cursor-pointer">Follow</button>
    </div>
  );
};

export default Suggestion;
