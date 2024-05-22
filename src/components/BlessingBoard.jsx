import React from "react";
import Image from "next/image.js";

function BlessingBoard() {
  return (
    <div className="flex flex-col w-[20%] h-full bg-sky-200 p-4 gap-4">
      <div className="flex text-xl text-black font-semibold justify-start items-center">
        <Image
          alt={"light"}
          width={100}
          height={100}
          src={"/light.png"}
          className="w-[4rem] h-[4rem]"
        />
        <span>小花同學送來祝福</span>
      </div>
      <div className="flex text-xl text-black font-semibold justify-start items-center">
        <Image
          alt={"heart"}
          width={100}
          height={100}
          src={"/heart.png"}
          className="w-[4rem] h-[4rem]"
        />
        <span>小名同學送來祝福</span>
      </div>
      <div className="flex text-xl text-black font-semibold justify-start items-center">
        <Image
          alt={"boat"}
          width={100}
          height={100}
          src={"/boat.png"}
          className="w-[4rem] h-[4rem]"
        />
        <span>小武同學送來祝福</span>
      </div>
      <div className="flex text-xl text-black font-semibold justify-start items-center">
        <Image
          alt={"light"}
          width={100}
          height={100}
          src={"/light.png"}
          className="w-[4rem] h-[4rem]"
        />
        <span>小酒同學送來祝福</span>
      </div>
    </div>
  );
}

export default BlessingBoard;
