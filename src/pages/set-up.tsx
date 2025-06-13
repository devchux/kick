import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import { Input } from "@/components/ui/input";
import React from "react";

const SetUp = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center h-dvh overflow-hidden">
      <Image src="/assets/images/logo.png" alt="" className="w-24 h-8" />
      <div className="max-w-[28.3rem] mx-auto">
        <h4 className="font-red-hat-display text-xl font-semibold mt-7 mb-4 text-center">
          Set Up Your KICK Account
        </h4>
        <p className="text-center text-lg font-red-hat-display mb-7">
          We’ll use your email to keep your account secure and send updates
        </p>
        <form className="flex flex-col gap-3.5">
          <Input placeholder="Enter your first name" />
          <Input placeholder="Enter your last name" />
          <Input type="email" placeholder="Enter your email address" />
          <GradientButton className="w-full mt-4">CONTINUE</GradientButton>
        </form>
      </div>
    </main>
  );
};

export default SetUp;
