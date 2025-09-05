import React from "react";

const Other = ({ container, answer, icon }) => {
  return (
    <div className="flex flex-col w-32 gap-4 items-center justify-start bg-smallBox-gradient px-3 py-3 rounded-2xl ">
      <div className="flex flex-col gap-2 justify-start items-center w-full text-white">
        {icon}
        <h3 className="font-publicSans text-textShade w-full text-center font-semibold text-base">
          {container}
        </h3>
      </div>
      <h2 className="font-publicSans text-white text-xl text-center font-medium w-full">
        {answer}
      </h2>
    </div>
  );
};

export default Other;
