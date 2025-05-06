import { cn } from "@/lib/utils";
import React from "react";

const GradientButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      type="button"
      style={{ backgroundImage: "url('/assets/images/button-gradient.png')" }}
      className={cn(
        "bg-no-repeat bg-cover font-bungee px-8 py-2.5 rounded-xl shadow-2xl shadow-blue-bell/75 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
