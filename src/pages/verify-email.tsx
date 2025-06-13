import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import { Input } from "@/components/ui/input";
import React from "react";

const VerifyEmail = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center h-dvh overflow-hidden">
      <Image src="/assets/images/logo.png" alt="" className="w-24 h-8" />
      <div className="max-w-[30.125rem] mx-auto">
        <h4 className="font-red-hat-display text-xl font-semibold mt-7 mb-4 text-center">
          Enter OTP and verify your email
        </h4>
        <p className="text-center text-lg font-red-hat-display mb-7 mx-auto max-w-[24.7rem]">
          We&apos;ve sent a 6-digit code to your email. Please enter it below to
          continue
        </p>
        <div className="flex flex-wrap gap-2.5 my-7">
          <Input className="w-16 h-12 text-center" />
          <Input className="w-16 h-12 text-center" />
          <Input className="w-16 h-12 text-center" />
          <Input className="w-16 h-12 text-center" />
          <Input className="w-16 h-12 text-center" />
          <Input className="w-16 h-12 text-center" />
        </div>
        <GradientButton className="w-full mt-4">VERIFY</GradientButton>
        <div className="text-lg mt-7">Didn&apos;t receive OTP? <button className="text-rose cursor-pointer hover:underline">Resend</button></div>
      </div>
    </main>
  );
};

export default VerifyEmail;
