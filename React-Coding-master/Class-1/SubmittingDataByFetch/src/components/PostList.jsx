import { useContext, useEffect } from "react";
import Post from "./Post";
import WelomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitalPosts } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
      });
  }, []);
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
