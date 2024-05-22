import React from "react";
import { useEffect, useState } from "react";
import Typewriter from "@/components/Typewriter";

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
    <div className="flex flex-col text-3xl font-bold justify-center items-center gap-2">
      {/* <div className="flex w-[10rem] h-[10rem] justify-center items-center overflow-auto">
        <Image
          alt={"light"}
          width={100}
          height={100}
          src={url}
          className={`${animate}`}
        />
      </div> */}
      <div
        className="flex flex-col text-[80px] bg-black rounded gap-4 opacity-80 p-1"
        style={{ wordWrap: "break-word", lineHeight: "2" }}
      >
        <div className="opacity-100">
          <Typewriter text={text} repeatDelay={2000} />
        </div>
      </div>
    </div>
  );
}

export default Balloon;
