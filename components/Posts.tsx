import { faker } from "@faker-js/faker";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Post } from "../types";
import PostComponent from "./Post";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.image(),
      id: i,
      caption: faker.lorem.paragraph(),
    }));

    setPosts(posts);
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
