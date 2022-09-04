import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
      </Head>
      <Header />

      <Feed />
      <Modal />
      <div className="text-center mt-10 text-xs text-gray-400">
        Hello i'm a instagram
      </div>
    </div>
  );
};

export default Home;
