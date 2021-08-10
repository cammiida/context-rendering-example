import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isLoggedIn: false,
  },
});

export const textState = atom({
  key: "textState",
  default: "",
});

export const userSearchIdState = atom({
  key: "currentUserId",
  default: "",
});
