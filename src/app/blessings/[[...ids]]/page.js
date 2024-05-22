/* eslint-disable react-hooks/rules-of-hooks */
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

const Blessings = ({ params }) => {
  const router = useRouter();

  const [lineId, setLineId] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [blessingCategory, setblessingCategory] = useState("");
  // 所有祝福對像
  const [users, setUsers] = useState(null);

  // 設定 lineID 參數
  useEffect(() => {
    console.log(params);
    setLineId(params.ids[0]);
    setblessingCategory(params.ids[1]);
  }, [params]);

  // 查自己的資料
  useEffect(() => {
    async function getMyInfo() {
      try {
        const _user = await useNodePostApi("/api/users/findOne", {
          lineId: lineId,
        });
        const user = _user.data.data;
        console.log("user", user);
        setSender(user._id.toString());
      } catch (err) {
        console.log("err", err);
      }
    }
    if (lineId) getMyInfo();
  }, [lineId]);

  // 查詢所有 USERS
  useEffect(() => {
    async function getUsers() {
      try {
        const _users = await useNodeGetApi("/api/users");
        const usersArr = _users.data.data;
        console.log("users", usersArr);
        setUsers([...usersArr]);
      } catch (err) {
        console.log("err", err);
      }
    }
    getUsers();
  }, []);

  // 提交資料
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在這裡處理提交邏輯，例如發送 POST 請求到服務器
    // 並將 lineId, studentId 和 name 發送給服務器
    const datas = {
      sender: sender,
      receiver: receiver,
      category: blessingCategory,
    };
    console.log("datas:", datas);
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const test = await useNodePostApi("/api/blessings/new", datas);
      console.log("test", test);
      router.push(`/myBlessings/${lineId}`);
    } catch (error) {
      console.log("發生錯誤:", error);
      // 在這裡添加錯誤處理邏輯，例如顯示錯誤消息給用戶或者進行其他操作
    }
  };

  return (
    <div className="flex w-full h-full bg-slate-300 justify-center items-start p-2">
      <div
        className="max-w-md w-full mx-auto mt-8 p-6 bg-white rounded-lg"
        style={{ boxShadow: "10px 10px 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <h1 className="text-2xl font-bold mb-4">請選擇要祝福的對象</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">祝福對象:</label>
            <select
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 p-1"
              defaultValue=""
              onChange={(e) => setReceiver(e.target.value)}
            >
              <option value="" disabled>
                請選擇對象
              </option>
              {users &&
                users.map((user, uIdx) => (
                  <option key={user._id} value={user._id}>
                    {user.studentId} - {user.name}
                  </option>
                ))}
              {/* 添加更多選項 */}
            </select>
          </div>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              送出
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blessings;
