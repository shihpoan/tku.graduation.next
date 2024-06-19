"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import webSocket from "socket.io-client";

import BlessingBoard from "@/components/BlessingBoard.jsx";
import BlessingAnimation from "@/components/BlessingAnimation.jsx";

export default function Home() {
  const bgArr = [
    "bg-balloon-bg text-black",
    "bg-spaceShip-bg text-white",
    "bg-soapBubbles-bg text-white",
    "bg-sollar-bg text-white",
  ];

  const [isChangeBg, setIsChangeBg] = useState("bg-balloon-bg text-black");
  const [isChangeText, setIsChangeText] = useState("");
  const [isPrevChangeText, setIsPrevChangeText] = useState("");
  const [prevChangeText, setPrevChangeText] = useState([]);
  const [prevNonChangeText, setPrevNonChangeText] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [ws, setWs] = useState(null);
  const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
  // const socketUrl = "http://localhost:3001/water";
  // const socketUrl = "https://tku.gunode.zhshihpoan.com/water";

  useEffect(() => {
    console.log("Docker!!!is!!!good!!!");
    console.log("Docker!!!is!!!good!!!2!!!");
    console.log("Docker!!!is!!!good!!!3!!!");

    if (prevChangeText.length != 0) {
      // console.log("prevChangeTextprevChangeText", prevChangeText.length);

      setIsChangeText(prevChangeText[0].text);
      if (prevNonChangeText[1]) {
        console.log("prevNonChangeText", prevNonChangeText);
        setIsPrevChangeText(prevNonChangeText[1]);
      }
      setIsChangeBg(bgArr[prevChangeText[0].imgIndex]);

      const timeoutId = setTimeout(() => {
        prevChangeText.shift();
        setPrevChangeText([...prevChangeText]);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [prevChangeText, prevNonChangeText, bgArr]);

  const connectWebSocket = useCallback(() => {
    if (!ws) {
      setWs(new webSocket(`${socketUrl}`));
    }
  }, [ws, socketUrl]);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [connectWebSocket, ws]);

  useEffect(() => {
    if (ws) {
      console.log("success connect!");
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    ws.on("dataUpdated", (data) => {
      const { category, sender, receiver } = data;
      const senderName = sender.name;
      const receiverName = receiver.name;
      const desc = category.description;

      const animationBlessingText = `${senderName}祝${receiverName}：${desc}`;
      const _slideIndex = Math.floor(Math.random() * bgArr.length);

      const animationBlessingObj = {
        text: animationBlessingText,
        imgIndex: _slideIndex,
      };

      const boardBlessing = [`${senderName}`, `送來祝福！`];

      setPrevChangeText((prevText) => [...prevText, animationBlessingObj]);
      setPrevNonChangeText((prevText) => [animationBlessingText, ...prevText]);
    });

    return () => {
      ws.off("dataUpdated");
    };
  };

  return (
    <div
      className={`flex w-full h-full max-h-full ${isChangeBg} justify-end bg-center bg-cover overflow-hidden`}
    >
      {/* <BlessingBoard blessings={[...prevNonChangeText]} /> */}
      <div className="flex flex-col w-full h-full p-1 justify-center items-center gap-2">
        <BlessingAnimation text={isPrevChangeText ? isPrevChangeText : ""} />
        <BlessingAnimation text={isChangeText ? isChangeText : ""} />
      </div>
    </div>
  );
}
