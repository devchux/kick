import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { XIcon } from "lucide-react";
import Image from "../image";
import GradientButton from "../buttons/gradient";

const TriviaDetails = ({
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
            🎮 WORLD CUP TRIVIA
          </h4>
          <Image
            src="/assets/images/test.png"
            alt=""
            className="w-full max-w-[14.125rem] md:max-w-[26.4rem] mx-auto h-[13.75rem] md:h-[20rem]"
          />
          <div className="flex justify-between items-center flex-wrap p-4 gap-4 bg-magnolia rounded-3xl mt-5">
            <div className="flex items-center gap-5">
              <Image
                src="/assets/svgs/rounded-question.svg"
                alt=""
                className="w-7 h-7"
              />
              <p className="text-gray-400">10 Questions</p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/assets/svgs/rounded-point.svg"
                alt=""
                className="w-7 h-7"
              />
              <p className="text-gray-400">10 Points</p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/assets/svgs/rounded-star.svg"
                alt=""
                className="w-7 h-7"
              />
              <p className="text-gray-400">3 minutes</p>
            </div>
          </div>
          <p className="text-center max-w-[34rem] font-medium text-sm md:text-2xl mx-auto my-4">
            Any time is a good time for a quiz and even better if that happens
            to be a football themed quiz
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

export default TriviaDetails;
