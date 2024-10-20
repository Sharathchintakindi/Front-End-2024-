import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElements = useRef();
  const postTitleElements = useRef();
  const postBodyElements = useRef();
  const reactionsElements = useRef();
  const tagsElements = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElements.current.value;
    const postTitle = postTitleElements.current.value;
    const postBody = postBodyElements.current.value;
    const reactions = reactionsElements.current.value;
    const tags = tagsElements.current.value.split(" ");

    userIdElements.current.value = "";
    postTitleElements.current.value = "";
    postBodyElements.current.value = "";
    reactionsElements.current.value = "";
    tagsElements.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id here
        </label>
        <input
          type="text"
          ref={userIdElements}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElements}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you doing today...!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElements}
          rows="5"
          className="form-control"
          id="body"
          placeholder="Tell us more about you..!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of reactions
        </label>
        <input
          type="text"
          ref={reactionsElements}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hash Tags Here
        </label>
        <input
          type="text"
          ref={tagsElements}
          className="form-control"
          id="tags"
          placeholder="please enter your Tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
