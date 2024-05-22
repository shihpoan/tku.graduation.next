"use client";
import { useState, useEffect } from "react";

function Typewriter({ text, repeatDelay }) {
  const [displayText, setDisplayText] = useState("");
  const [isRepeat, setIsRepeat] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId); // 清除定時器

        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 1000);
      }
    }, 100); // 控制顯示速度

    // 清除定時器
    return () => clearInterval(intervalId);
  }, [index]);

  return <span>{displayText}</span>;
}

export default Typewriter;
