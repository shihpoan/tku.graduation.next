"use client";
import React, { useEffect, useState } from "react";
import Balloon from "@/components/Balloon.jsx";

const bgArr = [
  "bg-balloon-bg",
  "bg-spaceShip-bg",
  "bg-soapBubbles-bg",
  "bg-sollar-bg",
];

const textArr = [
  "小花同學祝：未來的路上，希望你繼續閃耀！",
  "小名同學祝：畢業快樂！願你的人生如同一首美妙的樂章，充滿動聽的旋律！",
  "小武同學祝：願你勇敢地踏上新的征程，充滿信心地向前邁進！",
  "小酒同學祝：畢業是一個開始，願你的未來充滿無限可能！",
];

function BlessingAnimation({ text }) {
  const [isChangeBg, setIsChangeBg] = useState("bg-balloon-bg");
  const [isChangeText, setIsChangeText] = useState(
    "小安同學祝：在這個特別的日子，祝福你：前程萬里，一帆風順！"
  );

  return (
    <div className={`flex w-[80%] h-full justify-center items-center`}>
      <div className="w-full h-max">
        <Balloon text={text} />
      </div>
    </div>
  );
}

export default BlessingAnimation;
