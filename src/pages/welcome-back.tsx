import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import { Input } from "@/components/ui/input";
import React from "react";

const WelcomeBack = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center h-dvh overflow-hidden">
      <Image src="/assets/images/logo.png" alt="" className="w-24 h-8" />
      <div className="max-w-[28.3rem] w-full mx-auto">
        <h4 className="font-red-hat-display text-xl font-semibold mt-7 mb-4 text-center">
          Welcome Back
        </h4>
        <p className="text-center text-lg font-red-hat-display mb-7">
          Play trivia and arcade games
        </p>
        <form className="flex flex-col gap-10">
          <Input type="email" placeholder="Enter your email address" />
          <GradientButton className="w-full">CONTINUE</GradientButton>
        </form>
      </div>
    </main>
  );
};

export default WelcomeBack;
