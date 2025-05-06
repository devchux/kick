import React from "react";
import SidebarItem from "./item";

const SidebarSection = ({
  section,
}: {
  section: Array<{ icon: string; text: string; link: string }>;
}) => {
  return (
    <div className="bg-mirage rounded-xl pt-3 pb-12 px-2.5 mt-4 min-h-[20rem]">
      {section.map(({ icon, text, link }) => (
        <SidebarItem key={text} icon={icon} text={text} link={link} />
      ))}
    </div>
  );
};

export default SidebarSection;
