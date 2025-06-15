import React from "react";
import Image from "../image";
import Rating from "../ui/rating";
import { Heart } from "lucide-react";
import StartGame from "../games/start";
import ArcadeDetails from "../games/arcade-details";
import { useReducerState } from "@/hooks/use-reducer-state";

type ModalState = {
  startGame: boolean;
  details: boolean;
};

const ArcadeCard = ({ hasLiked }: { hasLiked?: boolean }) => {
  const [isOpen, setIsOpen] = useReducerState<ModalState>({
    startGame: false,
    details: false,
  });

  const toggleModal = (values: Partial<ModalState>) => {
    setIsOpen(values);
  };

  return (
    <>
      <div
        onClick={() => toggleModal({ details: true })}
        className="h-[17.4rem] w-full sm:max-w-[22rem] overflow-hidden rounded-2xl bg-mirage cursor-pointer"
      >
        <Image
          src="/assets/images/test.png"
          alt=""
          className="w-full h-[11rem]"
        />
        <div className="flex justify-between py-3 px-5">
          <div className="w-fit h-fit p-2 bg-pomengranate rounded-xl text-xs">
            NEW
          </div>
          <div className="flex flex-col items-center h-fit">
            <p className="text-xl font-semibold">BIOMUTANT</p>
            <Rating value={5} />
          </div>
          <button type="button" className="w-fit h-fit">
            <Heart
              stroke={hasLiked ? "#FF6B00" : "#616161"}
              fill={hasLiked ? "#FF6B00" : "transparent"}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
      <ArcadeDetails
        key={isOpen.details.toString()}
        isOpen={isOpen.details}
        onClose={() => toggleModal({ details: false })}
        onStart={() => toggleModal({ startGame: true, details: false })}
      />
      <StartGame
        key={isOpen.startGame.toString()}
        isOpen={isOpen.startGame}
        onClose={() => toggleModal({ startGame: false })}
      />
    </>
  );
};

export default ArcadeCard;
