import GradientButton from "@/components/buttons/gradient";
import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import React from "react";

const KickIntro = () => {
  return (
    <DashboardLayout>
      <div className="pt-[4.8rem] px-24 pb-24 relative">
        <Image src="/assets/svgs/ball.svg" alt="" className="w-10 h-10 absolute top-40 right-24" />
        <Image src="/assets/svgs/ball.svg" alt="" className="w-14 h-14 absolute bottom-40 left-40" />
        <div className="flex flex-col text-center mb-28">
          <h4 className="text-lg font-bungee">
            Welcome to KICK TRIVIA - Your Ultimate Football Trivia Destination!
          </h4>
          <p className="text-gray-600 max-w-[43.75rem] mx-auto mt-5 mb-8">
            Dive into the world of KICK, the most thrilling football trivia
            experience. Whether you&apos;re a newcomer or a seasoned pro,
            we&apos;ve got everything you need to prove your football expertise.
          </p>
          <Image
            src="/assets/images/player-7.png"
            alt=""
            className="mx-auto w-[27.25rem] h-[27.25rem]"
          />
        </div>
        <GradientButton className="w-[11.625rem] ml-auto block">
          NEXT
        </GradientButton>
      </div>
    </DashboardLayout>
  );
};

export default KickIntro;
