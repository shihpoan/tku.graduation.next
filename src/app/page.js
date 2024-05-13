import Image from "next/image";
import Balloon from "@/components/Balloon.jsx";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center gap-10">
      <Balloon url="/light.png" animate="animate-zoom" />
      <Balloon url="/heart.png" animate="animate-zoom" />
      <Balloon url="/boat.png" animate="animate-rotate" />
      <Balloon url="/heart.png" animate="animate-zoom" />
    </div>
  );
}
