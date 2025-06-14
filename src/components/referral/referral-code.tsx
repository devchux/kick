import { CopyIcon } from "lucide-react";
import React from "react";

const ReferralCode = ({ code }: { code: string }) => {
  return (
    <div className="bg-ebony-clay rounded-xl p-1 h-fit flex items-center gap-1.5 justify-between sm:min-w-[20rem]">
      <p className="text-silver-chalice text-sm ml-3 w-[calc(100%-2rem)] truncate">{code}</p>
      <button className="w-8 h-8 bg-rose cursor-pointer rounded-lg inline-flex items-center justify-center">
        <CopyIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default ReferralCode;
