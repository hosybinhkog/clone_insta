import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import PostComponent from "./Post";

const Posts: NextPage = () => {
  const [postsByFireBase, setPostsFireBase] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPostsFireBase(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {postsByFireBase &&
        postsByFireBase.map((post) => (
          <PostComponent
            key={post.id}
            post={{
              id: post.id,
              username: post.data().username,
              userImg: post.data().profileImg,
              img: post.data().image,
              caption: post.data().cation,
            }}
          />
        ))}
    </div>
  );
};

export default Posts;
