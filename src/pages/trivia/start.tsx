import TriviaCard from "@/components/cards/trivia";
import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import { useRouter } from "next/router";
import React from "react";

const StartTrivia = () => {
  const router = useRouter();

  return (
    <DashboardLayout className="pt-0">
      <h4 className="text-lg font-medium mb-3.5">Hi Stella,</h4>
      <p className="mb-7">what game would you like to play today?</p>
      <h4 className="text-xl font-medium">Most popular</h4>
      <div className="max-w-[67.4rem] mx-auto grid grid-cols-4 gap-y-5 my-5">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <TriviaCard
            key={i}
            text="General Football Trivia"
            icon="/assets/svgs/test-trivia.svg"
          />
        ))}
      </div>
      <div className="bg-white rounded-3xl overflow-hidden flex justify-between">
        <div className="py-5 pl-7 max-w-48">
          <p className="text-gray-500 font-medium mb-1.5">Trivia of the day</p>
          <p className="text-gray-400 text-sm mb-5">
            Play trivia of the day to gain extra points and coins
          </p>
          <button
            onClick={() => router.push("/trivia/day")}
            className="w-full max-w-44 bg-rose rounded-2xl font-bungee p-3 cursor-pointer"
          >
            Play trivia
          </button>
        </div>
        <div className="flex items-center relative">
          <Image
            src="/assets/images/trivia-question.png"
            alt=""
            className="w-[7.6rem] h-[7.6rem] absolute"
          />
          <Image
            src="/assets/images/trivia-lady.png"
            alt=""
            className="w-[16.88rem] h-[11.25rem]"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StartTrivia;
