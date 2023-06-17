import React, { useState } from "react";
import { useGetParticularPostQuery } from "../assets/services/FakeDataAPI";

const ParticularPost = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [postID, setPostID] = useState(randomNumber);
  const { data, error, isLoading, isSuccess } =
    useGetParticularPostQuery(postID);

  const changeHandler = (e) => {
    setPostID(e.target.value);
  };

  return (
    <div>
      <div className="text-center bg-info rounded p-3 w-75 mx-auto my-3">
        <h3>Get Indiviual Post</h3>
        <div class="input-group mb-3 mt-3">
          <span class="input-group-text" id="basic-addon1">
            Enter post ID
          </span>
          <input
            value={postID}
            onChange={changeHandler}
            type="number"
            class="form-control "
            placeholder="Enter POST ID ( 1 -100 )"
            min={1}
            max={100}
            maxLength={3}
            aria-label="postID"
            aria-describedby="basic-addon1"
          />
        </div>
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
        {data && (
          <p
            role="alert"
            className={`alert alert-warning w-100 my-3  ${
              postID <= 0 || postID > 100 ? "d-none" : "d-block"
            }  `}
            key={data.id}
          >
            {data.body}
          </p>
        )}
      </div>
    </div>
  );
};

export default ParticularPost;
