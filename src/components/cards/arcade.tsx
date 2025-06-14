import React from "react";
import Image from "../image";
import Rating from "../ui/rating";
import { Heart } from "lucide-react";

const ArcadeCard = ({ hasLiked }: { hasLiked?: boolean }) => {
  return (
    <div className="h-[17.4rem] w-full sm:max-w-[22rem] overflow-hidden rounded-2xl bg-mirage">
      <Image
        src="/assets/images/test.png"
        alt=""
        className="w-full h-[11rem]"
      />
      <div className="flex justify-between py-3 px-5">
        <div className="w-fit h-fit p-2 bg-pomengranate rounded-xl text-xs">
          NEW
        </div>
        <div className="flex flex-col items-center h-fit">
          <p className="text-xl font-semibold">BIOMUTANT</p>
          <Rating value={5} />
        </div>
        <button type="button" className="w-fit h-fit">
          <Heart
            stroke={hasLiked ? "#FF6B00" : "#616161"}
            fill={hasLiked ? "#FF6B00" : "transparent"}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default ArcadeCard;
