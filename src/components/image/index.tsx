import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

const Image = ({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <NextImage fill src={src} alt={alt} className={cn("object-cover", imageClassName)} />
    </div>
  );
};

export default Image;
