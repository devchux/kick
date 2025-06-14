import Tabs from "@/components/buttons/tabs";
import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import Awardee from "@/components/leaderboard/awardee";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Leaderboard = () => {
  return (
    <DashboardLayout className="!pt-0">
      <div className="flex justify-between">
        <div className="w-[calc(100%-9rem)]">
          <h4 className="text-lg font-medium mb-3.5">Hi Stella,</h4>
          <p className="mb-7">
            See how you stack up against the best players this week
          </p>
        </div>
        <Select>
          <SelectTrigger className="w-[9rem]">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This week</SelectItem>
            <SelectItem value="month">This month</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5 mb-10">
        <Tabs
          options={[
            { label: "KICK ARCADE", value: "arcade" },
            { label: "KICK TRIVIA", value: "trivia" },
          ]}
          value="arcade"
        />
      </div>
      <section className="py-7 px-3 bg-steel-gray rounded-3xl">
        <div className="hidden sm:flex gap-48 justify-center mb-8">
          <div className="flex flex-col items-center gap-1.5">
            <Image
              src="/assets/images/avatar.png"
              alt=""
              className="w-14 h-14"
            />
            <Image
              src="/assets/svgs/2nd-medal.svg"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Image
              src="/assets/images/avatar.png"
              alt=""
              className="w-16 h-16"
            />
            <Image
              src="/assets/svgs/1st-medal.svg"
              alt=""
              className="w-6 h-6"
            />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Image
              src="/assets/images/avatar.png"
              alt=""
              className="w-14 h-14"
            />
            <Image
              src="/assets/svgs/3rd-medal.svg"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Awardee
              key={index}
              name="Stella"
              points={index + 1}
              rank={index + 1}
              image="/assets/images/avatar.png"
            />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Leaderboard;
