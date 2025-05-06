import React from "react";
import Image from "../image";
import Bonus from "./bonus";
import SidebarSection from "./section";

const SECTION_ONE = [
  {
    icon: "kick-arcade",
    text: "Kick Arcade",
    link: "/arcade",
  },
  {
    icon: "kick-trivia",
    text: "Kick Trivia",
    link: "/trivia",
  },
  {
    icon: "leaderboard",
    text: "Leaderboard",
    link: "/leaderboard",
  },
  {
    icon: "win-cash",
    text: "Win & Cash",
    link: "/win-cash",
  },
  {
    icon: "invite-friend",
    text: "Invite a friend",
    link: "/invite",
  },
  {
    icon: "support",
    text: "Support",
    link: "/support",
  },
];

const SECTION_TWO = [
  {
    icon: "profile",
    text: "Profile",
    link: "/profile",
  },
  {
    icon: "settings",
    text: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <section className="h-full w-80 overflow-auto border border-white/25 pt-10 px-5 pb-5">
      <Image
        src="/assets/images/logo.png"
        alt=""
        className="w-24 h-9 mx-auto"
      />
      <div className="mt-7 bg-ebony rounded-xl px-2.5 py-3.5">
        <Bonus />
        <SidebarSection section={SECTION_ONE} />
        <SidebarSection section={SECTION_TWO} />
      </div>
    </section>
  );
};

export default Sidebar;
