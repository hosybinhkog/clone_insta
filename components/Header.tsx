import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header: NextPage = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  console.log(open, setOpen);

  return (
    <div className="sticky shadow-sm border-b bg-white top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl lg:mx-auto mx-5">
        <div
          onClick={() => router.push("/")}
          className="ralative w-24  hidden lg:inline-grid cursor-pointer"
        >
          <Image
            height={96}
            width={96}
            objectFit="contain"
            src="https://links.papareact.com/ocw"
          />
        </div>
        <div className="cursor-pointer ralative w-10 lg:hidden flex-shrink-0">
          <Image
            height={40}
            width={40}
            objectFit="contain"
            src="https://links.papareact.com/jjm"
          />
        </div>

        {/* Search Input */}

        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center justify-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right   */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full  text-white flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <HeartIcon className="navBtn" />
          <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
          <UserGroupIcon className="navBtn" />

          {session?.user ? (
            <img
              onClick={() => signOut()}
              className="h-10 rounded-full object-contain cursor-pointer"
              src={session.user.image as string}
              alt="profile pic"
            />
          ) : (
            <div className="text-blue-400 text-md font-semibold">
              <Link href="/auth/signin">Signin</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
