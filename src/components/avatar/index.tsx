import React from "react";
import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Avatar = ({ src, fallback }: { src: string; fallback: string }) => {
  return (
    <AvatarUI>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarUI>
  );
};

export default Avatar;
