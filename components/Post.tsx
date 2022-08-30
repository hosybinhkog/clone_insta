import {
  BookmarkAltIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { DotsCircleHorizontalIcon } from "@heroicons/react/solid";
import { NextPage } from "next";
import React from "react";
import { Post } from "../types";

interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }: PostProps) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={post.userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsCircleHorizontalIcon className="h-5 w-5 object-contain" />
      </div>
      {/* img  */}
      <img src={post.img} alt="" className="object-cover w-full rounded-sm" />

      {/* button  */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4 items-center">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkAltIcon className="btn" />
      </div>

      {/* caption  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{post.username}</span>
        {post.caption}
      </p>

      {/* COMMENT  */}

      {/* INPUT BOX  */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 w-7 object-contain" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Comment now!</button>
      </form>
    </div>
  );
};

export default Post;
