import React, { useState } from "react";
import Mark from "./mark_prev_parts/mark";
import Prev from "./mark_prev_parts/prev";

export const PreviewMarkup = React.createContext();

function App() {
  const [markPrev, setMarkPrev] = useState("");

  return (
    <PreviewMarkup.Provider value={{ markPrev, setMarkPrev }}>
      <Mark />
      <Prev />
    </PreviewMarkup.Provider>
  );
}

export default App;
