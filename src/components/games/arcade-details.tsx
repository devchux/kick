import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { XIcon } from "lucide-react";
import Image from "../image";
import GradientButton from "../buttons/gradient";

const ArcadeDetails = ({
  isOpen,
  onClose,
  onStart,
}: {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        closeIcon={<XIcon />}
        className="bg-white text-black p-7 md:p-14 max-h-[95dvh] overflow-auto w-full sm:max-w-[40rem]"
      >
        <div>
          <h4 className="font-bungee mb-7 text-center text-2xl md:text-4xl">
            🎮 Biomutant
          </h4>
          <Image
            src="/assets/images/test.png"
            alt=""
            className="w-full max-w-[14.125rem] md:max-w-[26.4rem] mx-auto h-[13.75rem] md:h-[20rem]"
          />
          <h5 className="text-center font-bungee text-lg md:text-2xl mt-7">
            Get ready to fight, mutate, and survive!
          </h5>
          <p className="text-center max-w-[34rem] font-medium text-sm md:text-2xl mx-auto my-4">
            Dive into the post-apocalyptic world of Biomutant — an action-packed
            arcade game where your skills evolve with every battle
          </p>
          <GradientButton
            onClick={onStart}
            className="max-w-[9.5rem] mx-auto block w-full text-white"
          >
            PLAY NOW
          </GradientButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArcadeDetails;
