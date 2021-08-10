import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Posts from "../components/PostList";
import { userSearchIdState } from "../state/atoms";
import { asyncPosts, filteredPostsState } from "../state/selectors";

const PostsPage = () => {
  const posts = useRecoilValue(asyncPosts);
  const filteredPosts = useRecoilValue(filteredPostsState);
  const [userSearchId, setUserSearchId] = useRecoilState(userSearchIdState);

  return (
    <div>
      <h1>Posts</h1>
      <input
        value={userSearchId}
        onChange={(e) => {
          const updateVal = e.currentTarget.value.length
            ? e.currentTarget.value
            : undefined;
          setUserSearchId(updateVal);
        }}
      />
      <h2>Filtered posts</h2>
      {userSearchId && <Posts posts={filteredPosts} />}
      <h2>All posts</h2>
      {posts && <Posts posts={posts} />}
    </div>
  );
};

export default PostsPage;
