import React from "react";
import Image from "next/image.js";

function BlessingBoard({ blessings = [] }) {
  return (
    <div
      className="flex flex-col w-[20%] h-full max-h-full rounded p-4 gap-4 overflow-auto"
      style={{ backdropFilter: "blur(15px)" }}
    >
      {blessings.map((blessing, bIdx) => (
        <div
          key={bIdx}
          className="flex text-base lg:text-xl font-semibold justify-start items-center gap-2"
        >
          <Image
            alt={"light"}
            width={100}
            height={100}
            src={
              "https://sbirdatas.s3.ap-northeast-1.amazonaws.com/%E9%85%87%E4%BE%AF%E8%B3%87%E8%A8%8A/%E6%96%B9%E6%A0%BC%E6%B5%81%E6%98%9F-02.png"
            }
            className="w-[2rem] lg:w-[4rem] h-[2rem] lg:h-[4rem]"
          />
          <div className="flex flex-col gap-2">
            <span>{blessing[0]}</span>
            <span>{blessing[1]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlessingBoard;
