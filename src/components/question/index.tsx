import GradientButton from "../buttons/gradient";
import OptionButton from "../buttons/option";
import Image from "../image";

const Question = ({
  title,
  image,
  options,
}: {
  title: string;
  image?: string;
  options: string[];
}) => {
  return (
    <div className="max-w-[34rem] mx-auto text-center">
      <p className="mb-5">{title}</p>
      {image && (
        <Image
          src={image}
          alt=""
          imageClassName="rounded-xl"
          className="w-full max-w-[25.75rem] h-[15.2rem] mx-auto mb-7 before:absolute before:content-[''] before:w-full before:h-full before:bg-rose before:-left-1 before:-bottom-1 before:rounded-xl"
        />
      )}
      <div className="flex flex-col gap-2.5 mb-8">
        {options.map((option, index) => (
          <OptionButton
            key={index}
            itemNo={String.fromCharCode(97 + index)}
            onClick={() => {}}
            status="unanswered"
          >
            {option}
          </OptionButton>
        ))}
      </div>
      <GradientButton className="w-full max-w-[19.75rem] mx-auto">
        NEXT
      </GradientButton>
    </div>
  );
};

export default Question;
