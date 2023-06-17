import React, { useState } from "react";
import { useAddPostMutation } from "../assets/services/FakeDataAPI";

const AddPost = () => {
  const [newPost, setNewPost] = useState({});
  const [addPost, { isLoading, error, isSuccess, data }] = useAddPostMutation();
  console.log("😇 L-7 in AddPost.jsx=> ", data);

  const newPostChangeHandler = (e) => {
    setNewPost({
      title: "New Post",
      name: "Vansh",
      body: e.target.value,
      id: Date.now(),
    });
  };
  console.log("😇 L-16 in AddPost.jsx=> ", newPost);
  const addPostHandler = async (e) => {
    e.preventDefault();
    await addPost(newPost);
  };
  return (
    <div>
      <div className="text-center bg-warning rounded p-3 w-75 mx-auto my-3">
        <div class="input-group">
          <span class="input-group-text">Write New Post</span>
          <textarea
            onChange={newPostChangeHandler}
            class="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button
          onClick={addPostHandler}
          type="button"
          class="px-5 my-2 btn btn-success"
        >
          Add Post
        </button>
      </div>
      <div className="text-center w-75 mx-auto my-3">
        {isLoading && (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        {error && (
          <div class="alert alert-danger" role="alert">
            Something went wrong! 💀
          </div>
        )}
        {isSuccess && (
          <p className={` bg-warning-subtle  rounded  p-3 w-100 my-3 `}>
            🎉 New Post created successfully! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default AddPost;
