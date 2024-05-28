/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image.js";
import {
  useNodeGetApi,
  useNodePostApi,
  useNodePatchApi,
  useNodeDeleteApi,
} from "@/hooks/useNode.js";
import OpenLineButton from "./OpenLineButton.jsx";

function MyBlessingBoard({ lineId }) {
  const [myObjId, setMyObjId] = useState("");
  const [myBlessings, setMyBlessings] = useState(null);

  // 我的 ObjId
  useEffect(() => {
    async function getMyId() {
      try {
        const dbDatas = await useNodePostApi("/api/users/findOne", {
          lineId: lineId,
        });
        const myDatas = dbDatas.data.data;
        setMyObjId(myDatas._id.toString());
        console.log("myDatas", myDatas);
      } catch (err) {
        console.log("err", err);
      }
    }
    getMyId();
  }, [lineId]);

  // 我收到的祝福
  useEffect(() => {
    async function getMyBlessings() {
      try {
        const dbDatas = await useNodePostApi(
          "/api/blessings/findByReceiverId",
          {
            receiver: myObjId,
          }
        );
        const myDatas = dbDatas.data.data;
        if (myDatas.length) setMyBlessings([...myDatas]);
        console.log("myDatas2", myDatas);
      } catch (err) {
        console.log("err", err);
      }
    }
    if (myObjId) getMyBlessings();
  }, [myObjId]);

  return (
    <div className="flex flex-col w-full h-full bg-sky-200 p-4 gap-4">
      <div className="flex flex-col w-full h-[90%] max-h-[90%] overflow-auto">
        <div className="flex flex-col w-full h-max">
          {myBlessings ? (
            myBlessings.map((blessings, bIdx) => (
              <div
                key={bIdx}
                className="flex text-xl text-black font-semibold justify-start items-center gap-2"
              >
                <Image
                  alt={"light"}
                  width={100}
                  height={100}
                  src={blessings.category.imageUrl}
                  className="w-[3rem] h-[3rem]"
                />
                <span>
                  {blessings.sender.name}：{blessings.category.description}
                </span>
              </div>
            ))
          ) : (
            <div className="flex w-full text-3xl justify-center items-center">
              尚無祝福資料
            </div>
          )}
          {/* <div className="w-full h-[100rem] bg-purple-200"></div> */}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <OpenLineButton />
      </div>
    </div>
  );
}

export default MyBlessingBoard;
