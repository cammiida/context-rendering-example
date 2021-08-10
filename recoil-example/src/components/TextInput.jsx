import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../state/atoms";
import { charCountState } from "../state/selectors";

const TextInput = ({ label }) => {
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  return (
    <>
      <br />
      <input
        id="userName"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <label htmlFor="userName">{label + " " + charCount}</label>
      <br />
    </>
  );
};

export default TextInput;
