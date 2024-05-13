import React from "react";
import Image from "next/image.js";

function Balloon({ url, animate }) {
  return (
    <div className="flex flex-col w-[20rem] h-[20rem] text-3xl font-bold rounded-full bg-red-100 justify-center items-center gap-2">
      <Image
        alt={"light"}
        width={100}
        height={100}
        src={url}
        className={`${animate}`}
      />
      <span>小花同學</span>
      <span>送來祝福</span>
    </div>
  );
}

export default Balloon;
