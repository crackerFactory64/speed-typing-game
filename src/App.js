import React, { useState, useEffect, useRef } from "react";

function App() {
  const gameTime = 5;

  const [timeRemaining, setTimeRemaining] = useState(gameTime);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (isGameRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isGameRunning]);

  const startGame = () => {
    setTimeRemaining(gameTime);
    setIsGameRunning(true);
    setText("");
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const countWords = (text) => {
    const textCopy = text;
    setWordCount(textCopy ? textCopy.trim().split(" ").length : 0);
  };

  const endGame = () => {
    setIsGameRunning(false);
    countWords(text);
  };

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
