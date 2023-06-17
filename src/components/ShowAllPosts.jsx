import React from "react";
import { useGetPostsQuery } from "../assets/services/FakeDataAPI";
const ShowAllPosts = () => {
  // Only this part seems little confusing
  const { data, error, isLoading, isSuccess } = useGetPostsQuery();
  return (
    <div className="bg-light  d-flex align-items-center justify-content-center flex-column">
      <p
        className="bg-danger w-75
      text-center
      text-white
      p-3
      rounded
      my-3

      "
      >
        All Posts 👇
      </p>
      {isLoading && (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          Something went wrong! 💀
        </div>
      )}

      {data &&
        data.map((item) => {
          return (
            <p
              role="alert"
              className={`alert alert-info w-75 m-3 `}
              key={item.id}
            >
              {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default ShowAllPosts;
