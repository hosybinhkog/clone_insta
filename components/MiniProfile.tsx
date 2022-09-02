import { NextPage } from "next";
import { signOut } from "next-auth/react";
import React from "react";

interface MiniProfileProps {
  profile: Profile;
}

interface Profile {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

const MiniProfile: NextPage<MiniProfileProps> = ({
  profile,
}: MiniProfileProps) => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10 space-x-2">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={profile.image as string}
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{profile.name}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button
        onClick={() => signOut()}
        className="text-blue-400 text-sm font-semibold"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
