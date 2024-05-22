// components/BindSuccessPage.js

import Link from "next/link";
import OpenLineButton from "@/components/OpenLineButton";

const BindSuccessPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl text-center">
      <h1 className="text-2xl font-bold mb-4">綁定成功！</h1>
      <p className="text-gray-700 mb-4">您的 LINE ID 已成功綁定。</p>
      <p className="text-gray-700 mb-4">您可以繼續瀏覽其他頁面或者返回 Line</p>
      <OpenLineButton />
    </div>
  );
};

export default BindSuccessPage;
