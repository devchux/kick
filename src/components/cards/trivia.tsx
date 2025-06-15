import React from "react";
import Image from "../image";
import TriviaDetails from "../games/trivia-details";
import { useReducerState } from "@/hooks/use-reducer-state";
import StartGame from "../games/start";

type ModalState = {
  startGame: boolean;
  details: boolean;
};

const TriviaCard = ({ text, icon }: { text: string; icon: string }) => {
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
        className="sm:max-w-60 bg-big-stone p-3 text-center flex flex-col items-center justify-center gap-4 rounded-xl h-[9.75rem] cursor-pointer"
        onClick={() => toggleModal({ details: true })}
      >
        <Image src={icon} alt="" className="w-10 h-10" />
        <p className="font-medium max-w-36 mx-auto">{text}</p>
      </div>
      <TriviaDetails
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

export default TriviaCard;
