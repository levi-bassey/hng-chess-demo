import React from "react";
import SmartBoard from "./SmartBoard";
import "react-chessground/dist/styles/chessground.css";
import DumbBoard from "./DumbBoard";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Smart board</h1>
        <p>The smart board has chess rules enforced using chess.js</p>
        <SmartBoard />
      </div>
      <div>
        <h1>Dumb board</h1>
        <p>This board doesn't use chess.js, so anything goes</p>
        <DumbBoard />
      </div>
    </div>
  );
};

export default App;
