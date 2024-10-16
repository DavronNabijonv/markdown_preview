import React, { useContext, useState } from "react";
import { marked } from "marked";
import { PreviewMarkup } from "../App";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt, FaExpandArrowsAlt } from "react-icons/fa";

export default function Prev() {
  const [comp, setComp] = useState(false);
  const { markPrev } = useContext(PreviewMarkup);

  return (
    <div className="preview_part">
      <div className="head">
        <div className="lefhead_left">
          <span>
            <LiaFreeCodeCamp />
          </span>
          <h2>Editor</h2>
        </div>
        <button onClick={() => setComp(!comp)}>
          {comp ? <FaExpandArrowsAlt /> : <FaCompressAlt />}
        </button>
      </div>
      <div className="preview">
        <div dangerouslySetInnerHTML={{ __html: marked(markPrev) }}></div>
      </div>
    </div>
  );
}
