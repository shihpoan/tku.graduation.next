import React from "react";
import { useEffect, useState } from "react";
import Typewriter from "@/components/TypeWriter";

const animations = ["animate-zoom", "animate-rotate", ""]; // 可用的動畫列表

function Balloon({ text }) {
  const [randomAnimation, setRandomAnimation] = useState("");
  const [randomRefresh, setRandomRefresh] = useState(false);

  useEffect(() => {
    // 在組件加載後，隨機選擇一個動畫
    const randomIndex = Math.floor(Math.random() * animations.length);
    setRandomAnimation(animations[randomIndex]);
    setTimeout(() => {
      setRandomRefresh(!randomRefresh);
    }, 3000);
  }, [randomRefresh, text]);
  return (
    <div
      className="flex flex-col w-full h-[30rem] text-[80px] text-3xl font-bold rounded justify-center items-center gap-2"
      style={{
        wordWrap: "break-word",
        lineHeight: "2",
        backdropFilter: "blur(80px)",
      }}
    >
      <div className="min-w-full px-4">
        <Typewriter text={text} repeatDelay={2000} />
      </div>
    </div>
  );
}

export default Balloon;
