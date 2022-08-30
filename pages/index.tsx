import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      <Header />

      <Feed />
      <div>Hello i'm a instagram</div>
    </div>
  );
};

export default Home;
