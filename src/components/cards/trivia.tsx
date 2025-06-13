import React from "react";
import Image from "../image";

const TriviaCard = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="max-w-60 bg-big-stone p-3 text-center flex flex-col items-center justify-center gap-4 rounded-xl h-[9.75rem] cursor-pointer"
      onClick={onClick}
    >
      <Image src={icon} alt="" className="w-10 h-10" />
      <p className="font-medium max-w-36 mx-auto">{text}</p>
    </div>
  );
};

export default TriviaCard;
