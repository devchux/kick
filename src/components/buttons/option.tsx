import React from "react";
import Image from "../image";
import { cn } from "@/lib/utils";

const OptionButton = ({
  children,
  onClick,
  status = "unanswered",
  itemNo = "a",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  status: "correct" | "wrong" | "unanswered";
  itemNo?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full max-w-[26.8rem] mx-auto cursor-pointer flex items-center justify-between h-14 border rounded-xl p-4",
        {
          "border-rose hover:bg-malibu/50": status === "unanswered",
          "border-white bg-malibu": status === "correct",
          "border-white bg-rose": status === "wrong",
        }
      )}
    >
      <span>{itemNo}.</span> <span>{children}</span>
      {["correct", "wrong"].includes(status) && (
        <Image src={`/assets/svgs/${status}.svg`} alt="" className="w-6 h-6" />
      )}
      {status === "unanswered" && <span />}
    </button>
  );
};

export default OptionButton;
