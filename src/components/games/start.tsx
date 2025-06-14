import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "../image";
import { cn } from "@/lib/utils";

const StartGame = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [level, setLevel] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isOpen) {
      timer = setInterval(() => {
        setLevel((prev) => {
          const x = prev - 1;
          if (x === 0) clearInterval(timer as NodeJS.Timeout);
          return x;
        });
      }, 1000);
    } 

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (level === 0) {
      timer = setTimeout(() => {
        onClose();
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [level, onClose]);

  return (
    <Dialog open={isOpen}>
      <DialogContent
        showCloseButton={false}
        className="bg-transparent border-none ring-0 outline-none flex items-center justify-center"
      >
        <Image
          src={`/assets/svgs/${level === 0 ? "go" : level}.svg`}
          alt=""
          imageClassName="object-contain"
          className={cn({
            "w-64 h-[38.625rem]": level !== 0,
            "w-[51.4rem] h-[38.625rem]": level === 0,
          })}
        />
      </DialogContent>
    </Dialog>
  );
};

export default StartGame;
