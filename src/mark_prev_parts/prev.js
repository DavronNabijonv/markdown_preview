import React, { useContext, useState } from "react"; 
import { marked } from "marked"; 
import ReactMarkdown from 'react-markdown';
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
    gfm: true, // GitHub-flavored Markdown
    highlight: function (code, lang) {
      // Optionally add syntax highlighting logic (using highlight.js, for example)
      return code; // Without highlighting for now
    },
  });

  return (
    <div className={markTog ? "hide" : "previewPart"}>
      <div className="head">
        <div className="lefhead_left">
          <span>
            <LiaFreeCodeCamp />
          </span>
          <h2>Editor</h2>
        </div>
        <button onClick={() => { setComp(!comp); setPrevTog(!prevTog); }}>
          {comp ? <FaCompressAlt /> : <FaExpandArrowsAlt />}
        </button>
      </div>
      <div className="prevDiv">
        {/* Use ReactMarkdown to render the Markdown */}
        <ReactMarkdown>{markPrev}</ReactMarkdown>
      </div>
    </div>
  );
}
