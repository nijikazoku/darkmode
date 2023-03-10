import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import db from "../../src/fire";

const Contents = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("postedAt", "desc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = [];
      snapshot.forEach((doc) => {
        postsData.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsData);
    });
    return () => unsubscribe();
  }, []);
  const deleteComment = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

  return (
    <div className="w-full">
      {posts.map((post, index) => {
        return (
          <div className="bg-gray-100 px-2 py-1 border-b shadow-md" key={index}>
            <p className="text-sm">
              {post.postedAt ? post.postedAt.toDate().toLocaleString() : ""}
            </p>
            <p className={`text-xl ${post.color}`}>{post.text}</p>
            <div className="flex justify-end pr-3">
              <button
                className="text-right"
                onClick={() => deleteComment(post.id)}
              >
                削除
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contents;
