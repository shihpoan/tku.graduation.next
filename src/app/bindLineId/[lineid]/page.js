// pages/bind-line-id.js
"use client";
// pages/bind-line-id.js

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import {
  useNodeGetApi,
  useNodePostApi,
  useNodePatchApi,
  useNodeDeleteApi,
} from "@/hooks/useNode.js";

const BindLineId = ({ params }) => {
  const router = useRouter();

  const [lineId, setLineId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在這裡處理提交邏輯，例如發送 POST 請求到服務器
    // 並將 lineId, studentId 和 name 發送給服務器
    const datas = {
      lineId: lineId,
      studentId: studentId,
      name: name,
    };
    console.log("datas:", datas);
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const test = await useNodePostApi("/api/users/bind", datas);
      console.log("test", test);
      router.push("/bindSuccess");
    } catch (error) {
      console.log("發生錯誤:", error);
      alert(`${error.response.data.error}`);
      // 在這裡添加錯誤處理邏輯，例如顯示錯誤消息給用戶或者進行其他操作
    }
  };

  useEffect(() => {
    setLineId(params.lineid);
  }, [params]);

  return (
    <div className="flex w-full h-full bg-slate-300 justify-center items-start p-2">
      <div
        className="max-w-md w-full mx-auto mt-8 p-6 bg-white rounded-lg"
        style={{ boxShadow: "10px 10px 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <h1 className="text-2xl font-bold mb-4">綁定 ID 和學號、姓名</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">ID:</label>
            <input
              disabled
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={lineId}
              onChange={(e) => setLineId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">學號:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="請輸入學號"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">姓名:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="請輸入姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              綁定
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BindLineId;
