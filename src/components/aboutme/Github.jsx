import React from "react";

export default function Github() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full px-4 md:px-16 lg:px-32 space-y-2 custom-scrollbar">
        <h1 className="text-base font-bold bg-white bg-opacity-5 p-4">
          You can also visit my Github repository.
        </h1>
        <div className="flex ">
          <div
            className="p-4 bg-white bg-opacity-5 rounded-s-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/jiordesta",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <img src="/icons/github.svg" width={75} height={75} alt="" />
          </div>
          <div
            className="flex justify-center items-center bg-white bg-opacity-5 p-4 rounded-e-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/jiordesta",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <button className="underline">open in new tab</button>
          </div>
        </div>
      </div>
    </div>
  );
}
