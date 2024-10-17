import React, { useState } from "react";
import Mark from "./mark_prev_parts/mark";
import Prev from "./mark_prev_parts/prev";

export const PreviewMarkup = React.createContext();
export const MarkTogle = React.createContext();
export const PrevTogle = React.createContext();

function App() {
  const [markPrev, setMarkPrev] = useState(`# This is a Heading
**This is bold text**
* This is a list item
`);

  const [markTog, setMarkTog] = useState(false);
  const [prevTog, setPrevTog] = useState(false);

  return (
    <PreviewMarkup.Provider value={{ markPrev, setMarkPrev }}>
      <MarkTogle.Provider value={{ markTog, setMarkTog }}>
        <PrevTogle.Provider value={{ prevTog, setPrevTog }}>
          <Mark />
          <Prev />
        </PrevTogle.Provider>
      </MarkTogle.Provider>
    </PreviewMarkup.Provider>
  );
}

export default App;
