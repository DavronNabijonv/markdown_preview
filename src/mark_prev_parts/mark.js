import React, { useState, useContext } from "react";
import { PreviewMarkup } from "../App";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt, FaExpandArrowsAlt } from "react-icons/fa";

export default function Mark() {
  const [comp, setComp] = useState(false);
  const { markPrev, setMarkPrev } = useContext(PreviewMarkup);

  return (
    <div className="markPart">
      <div className="head">
        <div className="lefhead_left">
          <span><LiaFreeCodeCamp /></span>
          <h2>Editor</h2>
        </div>
        <button onClick={() => setComp(!comp)}>
          {comp ? <FaExpandArrowsAlt /> : <FaCompressAlt />}
        </button>
      </div>
      <div className={comp?"long":"short"}>
        <textarea
          id="editor"
          value={markPrev}
          onChange={(e) => setMarkPrev(e.target.value)}
        />
      </div>
    </div>
  );
}
