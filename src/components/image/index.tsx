import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <NextImage fill src={src} alt={alt} className="object-cover" />
    </div>
  );
};

export default Image;
