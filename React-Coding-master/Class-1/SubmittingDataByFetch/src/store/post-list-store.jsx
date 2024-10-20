import { Children, createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitalPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, disptachPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    disptachPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitalPosts = (posts) => {
    disptachPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      disptachPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [disptachPostList]
  );
  return (
    <PostList.Provider
      value={{ postList, addInitalPosts, addPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
