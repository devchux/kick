import React from "react";

const GradientButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      style={{ backgroundImage: "url('/assets/images/button-gradient.png')" }}
      className="bg-no-repeat bg-cover px-8 py-2.5 rounded-xl shadow-2xl shadow-blue-bell/75 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default GradientButton;
