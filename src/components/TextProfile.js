import React from "react";
import {
  highLightWordInText,
  wordsToHighlight,
} from "../utils/highlightWordInText";

const TextProfile = ({ text }) => {
  const toDisplay = highLightWordInText(text, wordsToHighlight);
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: toDisplay }}></p>
    </>
  );
};

export default TextProfile;
