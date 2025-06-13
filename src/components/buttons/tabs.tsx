import { cn } from "@/lib/utils";
import React from "react";

type TabOption = {
  label: string;
  value: string;
};

const Tabs = ({
  options,
  value,
  onChange,
}: {
  options: TabOption[];
  value: string;
  onChange?: (value: TabOption) => void;
}) => {
  return (
    <div className="rounded-full flex gap-4 p-1.5 overflow-hidden bg-white/10 sm:w-fit">
      {options.map((option) => (
        <button
          key={option.value}
          className={cn(
            "px-7 sm:px-8 py-2 sm:py-2.5 rounded-full font-medium transition-colors cursor-pointer text-sm sm:text-lg w-full sm:w-fit",
            value === option.value ? "bg-rose text-white" : "text-white"
          )}
          onClick={() => onChange?.(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
