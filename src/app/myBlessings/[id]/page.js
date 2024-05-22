import React from "react";
import MyBlessingBoard from "@/components/MyBlessingBoard.jsx";

function page({ params }) {
  const lineId = params.id;
  return (
    <div className="w-full h-full">
      <MyBlessingBoard lineId={lineId} />
    </div>
  );
}

export default page;
