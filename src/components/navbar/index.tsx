import React from "react";
import Image from "../image";
import Avatar from "../avatar";
import SearchInput from "../inputs/search";

const Navbar = () => {
  return (
    <nav className="md:flex justify-between items-center py-10 pl-5 pr-12 hidden">
      <div>
        <p className="text-gray-400 mb-2">GMT - 02:48</p>
        <p className="text-gray-400">12/04/24</p>
      </div>
      <div className="flex items-center gap-3.5">
        <SearchInput className="hidden md:flex" />
        <button type="button" className="p-4 bg-white/5 rounded-2xl cursor-pointer">
          <Image src="/assets/svgs/bell.svg" alt="" className="w-4 h-5" />
        </button>
        <Avatar src="/" fallback="CE" />
      </div>
    </nav>
  );
};

export default Navbar;
