import {
  BookmarkAltIcon,
  ChatIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { DotsCircleHorizontalIcon } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../firebase";
import { Post } from "../types";

interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }: PostProps) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [hasLike, setHasLike] = useState<boolean>(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", post.id as string, "comments"),
          orderBy("timestamps", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, post]
  );

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts", post.id as string, "likes")),
        (snapshot) => setLikes(snapshot.docs)
      ),
    [db, post]
  );

  useEffect(
    () =>
      setHasLike(
        likes.findIndex((like) => like.id === session?.user?.email) !== -1
      ),
    [likes, session]
  );

  const likePost = async () => {
    if (hasLike) {
      await deleteDoc(
        doc(db, "posts", post.id as string, "likes", session?.user?.email || "")
      );
    } else {
      await setDoc(
        doc(
          db,
          "posts",
          post.id as string,
          "likes",
          session?.user?.email || ""
        ),
        {
          username: session?.user?.name,
        }
      );
    }
  };

  const sendComment = async (e: any) => {
    e.preventDefault();
    const commnetToSend = comment;

    setComment("");

    await addDoc(collection(db, "posts", post.id as string, "comments"), {
      comment: commnetToSend,
      username: session?.user?.name,
      userImage: session?.user?.image,
      timestamps: serverTimestamp(),
    });
  };

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
      {session && (
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex space-x-4 items-center">
            {hasLike ? (
              <HeartIcon onClick={likePost} className={`btn text-red-500`} />
            ) : (
              <HeartIconSolid onClick={likePost} className={`btn`} />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkAltIcon className="btn" />
        </div>
      )}

      {/* caption  */}
      <div className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mr-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{post.username}</span>
        {post.caption}
      </div>

      {/* COMMENT  */}

      {comments.length > 0 && (
        <div className="max-h-40 ml-10  overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt="avatar"
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment interval={1000} fromNow className="pr-5 text-xs">
                {comment.data().timestamps?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* INPUT BOX  */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 w-7 object-contain" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className="font-semibold text-blue-400 "
          >
            Comment now!
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
