import { selector } from "recoil";
import { textState, userSearchIdState } from "./atoms";

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const asyncPosts = selector({
  key: "asyncPosts",
  get: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw response;
      }
    } catch (e) {}
  },
});

export const filteredPostsState = selector({
  key: "filteredPosts",
  get: ({ get }) => {
    const allPosts = get(asyncPosts);
    const userSearchId = get(userSearchIdState);

    if (userSearchIdState) {
      return allPosts.filter((post) => post.userId === Number(userSearchId));
    }
    return allPosts;
  },
});
