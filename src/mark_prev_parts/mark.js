import React, { useState, useContext } from "react";
import { MarkTogle, PreviewMarkup, PrevTogle } from "../App";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { FaCompressAlt, FaExpandArrowsAlt } from "react-icons/fa";

// css
import '../App.css';

export default function Mark() {

  // markPrev: get value of textarea
  const { markPrev, setMarkPrev } = useContext(PreviewMarkup);

  // togle variables to long and short 
  // visibility of preview or murkup
  const {prevTog} = useContext(PrevTogle);
  const {setMarkTog,markTog} = useContext(MarkTogle);

  // togle to do a long and short visibility 
  const [comp,setComp] = useState(false);

  return (
    <div className={prevTog?"hide":"markPart"}>
      <div className="head">
        <div className="lefhead_left">
          <span><LiaFreeCodeCamp /></span>
          <h2>Editor</h2>
        </div>
        <button onClick={() =>{setComp(!comp);setMarkTog(!markTog)}}>
        {comp ? <FaCompressAlt />: <FaExpandArrowsAlt />}
        </button>
      </div>
      <div className={"long"}>
        <textarea
          id="editor"
          value={markPrev}
          onChange={(e) => setMarkPrev(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

// className={comp?"long":"short"}