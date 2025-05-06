import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import React from "react";

const Welcome = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center h-dvh overflow-hidden">
      <Image src="/assets/images/logo.png" alt="" className="w-24 h-8" />
      <p className="text-xl font-semibold mt-8 mb-4">
        Welcome to KICK +234 7050 857 338,
      </p>
      <p className="text-lg max-w-[25.625rem] mb-10">
        We&apos;ve successfully detected your phone number. Let&apos;s set up
        your account
      </p>
      <GradientButton>CONTINUE</GradientButton>
    </main>
  );
};

export default Welcome;
