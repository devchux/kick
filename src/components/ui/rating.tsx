import { StarIcon } from "lucide-react";
import React, { useState } from "react";

const Rating = ({
  count = 5,
  value = 0,
  onSelect,
}: {
  count?: number;
  value?: number;
  onSelect?: (value: number) => void;
}) => {
  const [onHover, setOnHover] = useState<Record<string, boolean>>({});

  const activate = (i: number) => {
    const hover = onHover?.[i.toString()]
    if (hover) return true
    return value >= i
  };

  return (
    <div className="flex gap-2.5 items-center">
      {Array.from({ length: count }, (_, i) => i + 1).map((i) => (
        <StarIcon
          key={i}
          stroke={activate(i) ? "#FF6B00" : "#616161"}
          className="w-4 h-4 cursor-pointer"
          fill={activate(i) ? "#FFDD17" : ""}
          onClick={() => onSelect?.(i + 1)}
          onMouseEnter={() => setOnHover({ ...onHover, [i]: true })}
          onMouseLeave={() => setOnHover({ ...onHover, [i]: false })}
        />
      ))}
    </div>
  );
};

export default Rating;
