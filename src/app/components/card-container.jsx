import codeImage from "../assets/image/illustration-article.svg";
import profileAvatar from "../assets/icon/image-avatar.webp";
import Image from "next/image";
import { useState } from "react";

const CardContainer = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <div className="bg-white p-5 max-w-[300px] flex flex-col gap-5 border border-black rounded-2xl container-shadow">
      <Image alt="image" src={codeImage} className="rounded-md" />
      <div className="flex flex-col items-start gap-5">
        <div className="bg-yellow block py-1 px-2 rounded-md">
          <p className="font-semibold text-sm">Learning</p>
        </div>
        <p className="text-sm font-semibold">Published 21 Dec 2023</p>
        <h2
          className={`font-bold text-l ${
            isHover && "text-yellow-500"
          } cursor-pointer`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          HTML & CSS foundations
        </h2>

        <p className="text-gray-400 text-xs">
          These languages are the backtone of every website defining structure
          content, and presentation.
        </p>
        <div className="flex gap-3 items-center">
          <Image src={profileAvatar} alt="image" className="w-10" />
          <p className="font-bold text-sm">Greg hooper</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
