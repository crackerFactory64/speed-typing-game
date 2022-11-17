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
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        disabled={!isGameRunning}
      />
      <p>Time remaining: {timeRemaining}</p>
      <button onClick={startGame} disabled={isGameRunning}>
        Start
      </button>
      <p>Word count: {wordCount} </p>
    </div>
  );
}

export default App;
