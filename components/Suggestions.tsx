import { faker } from "@faker-js/faker";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Suggestion } from "../types";
import SuggestionComponent from "./Suggestion";

const Suggestions: NextPage = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10 ">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggesitons for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions?.map((suggestion) => (
        <SuggestionComponent suggestion={suggestion} key={suggestion.id} />
      ))}
    </div>
  );
};

export default Suggestions;
