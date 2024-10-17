import React, { useContext, useState } from "react"; 
import { marked } from "marked"; 
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { MarkTogle, PreviewMarkup, PrevTogle } from "../App";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt, FaExpandArrowsAlt } from "react-icons/fa";

// CSS
import '../App.css';

export default function Prev() {
  // Toggle for visibility of long or short view
  const [comp, setComp] = useState(false);

  // markPrev: set value of textarea (Markdown content)
  const { markPrev } = useContext(PreviewMarkup);

  // Toggle variables to control visibility of preview or markup
  const { markTog } = useContext(MarkTogle);
  const { prevTog, setPrevTog } = useContext(PrevTogle);

  // Configure marked to enable GFM and syntax highlighting
  marked.setOptions({
    breaks: true, // Line breaks in Markdown will be rendered as <br>
    gfm: true, 
    highlight: function (code, lang) {
      return code; 
    },
  });

  console.log(marked(markPrev))

  return (
    <div className={markTog ? "hide" : "previewPart"}>
      <div className="head">
        <div className="lefhead_left">
          <span>
            <LiaFreeCodeCamp />
          </span>
          <p>Editor</p>
        </div>
        <button onClick={() => { setComp(!comp); setPrevTog(!prevTog); }}>
          {comp ? <FaCompressAlt /> : <FaExpandArrowsAlt />}
        </button>
      </div>
      <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkBreaks]} >{markPrev}</ReactMarkdown>
      </div>
    </div>
  );
}
