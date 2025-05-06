import Link from "next/link";
import React, { useState } from "react";
import Image from "../image";
import { cn } from "@/lib/utils";

const SidebarItem = ({
  icon,
  text,
  link,
  isActive,
}: {
  icon: string;
  text: string;
  link: string;
  isActive?: boolean;
}) => {
  const [onHover, setOnHover] = useState(false);

  const svg = onHover
    ? `/assets/svgs/${icon}-white.svg`
    : `/assets/svgs/${icon}${isActive ? "-white" : ""}.svg`;

  const shouldActivate = isActive || onHover;

  return (
    <Link
      href={link}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className={cn(
        "flex px-5 py-4 items-center gap-4 hover:bg-rose-700/20 rounded-2xl",
        {
          "bg-rose-700/20": shouldActivate,
        }
      )}
    >
      <Image src={svg} alt="" className="w-5 h-5" />
      <p className={cn("font-medium", { "text-white/50": !shouldActivate })}>
        {text}
      </p>
    </Link>
  );
};

export default SidebarItem;
