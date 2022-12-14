import { NextPage } from "next";
import { Profile } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          {session?.user && <MiniProfile profile={session?.user as Profile} />}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
