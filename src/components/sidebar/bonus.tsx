import React from "react";
import Image from "../image";

const Bonus = () => {
  return (
    <div className="flex gap-3 items-center bg-mirage py-0.5 px-2 rounded-xl">
      <div className="relative w-10 h-16">
        <Image
          src="/assets/svgs/glowing-coins.svg"
          alt=""
          className="w-full h-10"
        />
        <h4 className="text-[#5B15FF] font-medium text-2xl absolute left-1/2 -translate-x-1/2 bottom-0.5 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
          {/* Add text border white and letter spacing */}
          20
        </h4>
      </div>
      <div className="w-full flex flex-col gap-2.5">
        <p className="text-sm font-extrabold">Bonus</p>
        <p className="text-xs font-medium text-gray-600">
          Get&nbsp;everyday&nbsp;extra&nbsp;points
        </p>
      </div>
    </div>
  );
};

export default Bonus;
