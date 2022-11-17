import { useState, useEffect, useRef } from "react";

export default function useGameLogic(gameTime = 5) {
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

  return {
    textareaRef,
    text,
    handleChange,
    isGameRunning,
    timeRemaining,
    startGame,
    isGameRunning,
    wordCount,
  };
}
