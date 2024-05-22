"use client";
import { useEffect, useState } from "react";
import BlessingBoard from "@/components/BlessingBoard.jsx";
import BlessingAnimation from "@/components/BlessingAnimation.jsx";

export default function Home() {
  return (
    <div className={`flex w-full h-full justify-end`}>
      <BlessingBoard />
      <BlessingAnimation />
    </div>
  );
}
