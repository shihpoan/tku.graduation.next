import React from "react";

function page() {
  return (
    <div
      className="relative max-w-md mx-auto mt-8 p-6 bg-white bg-opacity-30 rounded-lg shadow-xl"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <h1 className="text-2xl font-bold mb-4">毛玻璃特效區塊</h1>
      <p className="text-gray-700 mb-4">這是一個具有毛玻璃特效的區塊。</p>
      <p className="text-gray-700">
        您可以繼續瀏覽其他頁面或者返回
        <a href="/" className="text-blue-500 hover:underline">
          首頁
        </a>
        。
      </p>
    </div>
  );
}

export default page;
