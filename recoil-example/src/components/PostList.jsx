import React from "react";

const PostList = ({ posts }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {posts.map((post) => (
        <div
          style={{
            boxShadow: `
            0px 2px 1px -1px rgb(0 0 0 / 20%), 
            0px 1px 1px 0px rgb(0 0 0 / 14%), 
            0px 1px 3px 0px rgb(0 0 0 / 12%)`,
            padding: "10px",
            backgroundColor: "#EEE",
          }}
          key={post.id}
        >
          <h4>{post.title}</h4>
          <p>
            Post ID: {post.id}
            <br />
          </p>
          User ID: {post.userId}
        </div>
      ))}
    </div>
  );
};

export default PostList;
