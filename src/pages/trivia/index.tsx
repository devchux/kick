import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import { useRouter } from "next/router";
import React from "react";

const Trivia = () => {
  const router = useRouter();

  return (
    <DashboardLayout className="md:pt-0">
      <h4 className="text-lg font-bungee text-center">Choose your avatar</h4>
      <div className="grid grid-cols-4 md:grid-cols-6 max-w-[44.7rem] gap-y-7 sm:gap-y-14 mt-10 mb-12 mx-auto">
        {Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
          <Image
            key={i}
            src={`/assets/images/avatar.png`}
            alt=""
            className="w-14 h-14 cursor-pointer mx-auto"
          />
        ))}
      </div>
      <GradientButton
        onClick={() => router.push("/trivia/start")}
        className="w-full max-w-[22rem] block mx-auto"
      >
        START
      </GradientButton>
    </DashboardLayout>
  );
};

export default Trivia;
