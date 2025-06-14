import React from "react";
import Image from "../image";
import { MenuIcon, SearchIcon } from "lucide-react";

const MobileNavbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <nav className="flex justify-between items-center py-1.5 pl-5 pr-3 bg-ebony rounded-xl md:hidden mx-2.5 mt-12">
      <Image src="/assets/images/logo.png" alt="" className="w-20 h-7" />
      <div className="flex gap-3.5">
        <button
          type="button"
          className="p-4 bg-white/5 rounded-2xl cursor-pointer"
        >
          <SearchIcon className="w-4 h-5" />
        </button>
        <button
          type="button"
          className="p-4 bg-white/5 rounded-2xl cursor-pointer"
        >
          <Image src="/assets/svgs/bell.svg" alt="" className="w-4 h-5" />
        </button>
        <button
          type="button"
          onClick={toggle}
          className="p-4 bg-white/5 rounded-2xl cursor-pointer"
        >
          <MenuIcon className="w-4 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
