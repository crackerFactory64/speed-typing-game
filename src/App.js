import React from "react";
import useGameLogic from "./useGameLogic";
function App() {
  const {
    textareaRef,
    text,
    handleChange,
    timeRemaining,
    startGame,
    isGameRunning,
    wordCount,
  } = useGameLogic(10);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <div className="even-columns">
        <p>
          Word count: <strong>{wordCount}</strong>{" "}
        </p>
        <p>
          Time remaining:<strong> {timeRemaining}</strong>
        </p>
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        disabled={!isGameRunning}
      />

      <button onClick={startGame} disabled={isGameRunning}>
        Start
      </button>
    </div>
  );
}

export default App;
