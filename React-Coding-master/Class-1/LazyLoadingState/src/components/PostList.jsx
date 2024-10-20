import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

  const { postList, addInitalPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaningUp UseEffect");
      controller.abort();
    };
  }, []);
  
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
