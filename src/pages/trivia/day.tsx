import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import Question from "@/components/question";
import React from "react";

const TriviaDay = () => {
  return (
    <DashboardLayout>
      <div className="relative">
        <Image
          src="/assets/svgs/ball.svg"
          alt=""
          className="w-10 h-10 absolute top-40 right-24"
        />
        <Image
          src="/assets/svgs/ball.svg"
          alt=""
          className="w-14 h-14 absolute bottom-40 left-40"
        />
        <h4 className="text-2xl font-semibold text-center">
          TRIVIA OF THE DAY
        </h4>
        <Image
          src="/assets/images/question-round.png"
          alt=""
          className="w-16 h-16 mt-4 mb-5 mx-auto"
        />
        <p className="text-center max-w-[27.5rem] mx-auto text-white/55 mb-8">
          Earn extra KICK points by engaging exciting questions on the trivia of
          the day!
        </p>
        <Question
          title="Which player has scored the most goals in the history of the English Premier League?"
          options={["Alan Shearer", "Alan Shearer"]}
          image="/assets/images/test.png"
        />
      </div>
    </DashboardLayout>
  );
};

export default TriviaDay;
