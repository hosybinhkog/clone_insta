import { NextPage } from "next";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";

const Stories: NextPage = () => {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));

    console.log(suggestions);
  }, []);

  return <div></div>;
};

export default Stories;
