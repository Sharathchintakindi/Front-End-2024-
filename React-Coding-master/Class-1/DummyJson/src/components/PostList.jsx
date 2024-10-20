import { useContext, useState } from "react";
import Post from "./Post";
import WelomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitalPosts } = useContext(PostListData);
  const [dataFetch, setDataFetch] = useState(false);
  if (!dataFetch) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
      });
    setDataFetch(true);
  }

  return (
    <>
      {postList.length === 0 && <WelomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
