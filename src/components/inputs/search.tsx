import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const SearchInput = ({
  className,
  onChange,
  value,
}: {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const [type, setType] = useState("");

  return (
    <div
      className={cn(
        "w-[24rem] flex items-center gap-4 space-y-0 py-2.5 px-4 rounded bg-white/5",
        className
      )}
    >
      <SearchIcon className="w-4 h-4" />
      <div className="w-full">
        <input
          type="search"
          placeholder="Search"
          className="w-full h-full bg-transparent border-none outline-none"
          value={value}
          onChange={(e) => setType(e.target.value)}
          onKeyUp={() => {
            onChange?.(type);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
