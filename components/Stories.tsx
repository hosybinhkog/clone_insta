import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Suggestion } from "../types";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories: NextPage = () => {
  const [suggestions, setSubgestions] = useState<Suggestion[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      id: i,
    }));

    setSubgestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 bg-white border mt-8  border-gray-200 rounded-sm overflow-x-scroll w-full p-6 scrollbar-thin scrollbar-thumb-black ">
      {session && (
        <Story
          suggestion={{
            avatar: session.user?.image as string,
            username: session.user?.name as string,
            userId: session.user?.email as string,
            email: session.user?.email as string,
            id: 1000000,
          }}
        />
      )}
      {suggestions &&
        suggestions.map((suggestion) => (
          <Story suggestion={suggestion} key={suggestion.userId} />
        ))}
    </div>
  );
};

export default Stories;
