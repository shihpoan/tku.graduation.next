"use client";
// components/OpenLineButton.js

import React from "react";

const OpenLineButton = () => {
  const openLineApp = () => {
    // 這裡使用了 LINE URL Scheme，您可以根據需要進行調整
    // 例如 line://msg/text/ 可以用來打開 LINE @525tpjwg
    window.location.href = `line://ti/p/@525tpjwg`;
  };

  return (
    <button
      onClick={openLineApp}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      打開 LINE App
    </button>
  );
};

export default OpenLineButton;
