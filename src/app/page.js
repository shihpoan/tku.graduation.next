"use client";
import { useEffect, useState, useRef } from "react";
import BlessingBoard from "@/components/BlessingBoard.jsx";
import BlessingAnimation from "@/components/BlessingAnimation.jsx";

export default function Home() {
  const bgArr = [
    "bg-balloon-bg text-black",
    "bg-spaceShip-bg text-white",
    "bg-soapBubbles-bg text-white",
    "bg-sollar-bg text-white",
  ];

  const textArr = [
    "小花同學祝：未來的路上，希望你繼續閃耀！",
    "小名同學祝：畢業快樂！願你的人生如同一首美妙的樂章！",
    "小武同學祝：願你勇敢地踏上新的征程，充滿信心地向前邁進！",
    "小酒同學祝：畢業是一個開始，願你的未來充滿無限可能！",
  ];
  const [isChangeBg, setIsChangeBg] = useState("bg-balloon-bg text-black");
  const [isChangeText, setIsChangeText] = useState(
    "小安同學祝：在這個特別的日子，祝福你：前程萬里！"
  );
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let _slideIndex = slideIndex;
    if (_slideIndex >= bgArr.length) _slideIndex = 0;
    setTimeout(() => {
      // 生成 1 到 4 之間的隨機整數
      const randomNumber = Math.floor(Math.random() * 4);
      console.log("_slideIndex", _slideIndex);
      setIsChangeBg(bgArr[_slideIndex]);
      setIsChangeText(textArr[_slideIndex]);
      _slideIndex += 1;
      setSlideIndex(_slideIndex);
    }, 3000);
  }, [slideIndex]);
  return (
    <div
      className={`flex w-full h-full ${isChangeBg} justify-end bg-center bg-cover`}
      onClick={() => {
        // 生成 1 到 4 之間的隨機整數
        const randomNumber = Math.floor(Math.random() * 4);
        console.log("randomNumber", randomNumber);
        setIsChangeBg(bgArr[randomNumber]);
        setIsChangeText(textArr[randomNumber]);
      }}
    >
      <BlessingBoard />
      <div className="flex w-full h-full p-1 justify-center">
        <BlessingAnimation text={isChangeText} />
        {isChangeText}
      </div>
    </div>
  );
}
