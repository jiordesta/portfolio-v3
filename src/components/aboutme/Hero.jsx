import React, { useState } from "react";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full px-4 md:px-16 lg:px-32 space-y-2 custom-scrollbar">
        <h1 className="text-4xl font-bold bg-white bg-opacity-5 p-4">
          Hi, I'm John Irson Ordesta.
        </h1>
        <p className="text-base font-bold bg-white bg-opacity-5 p-4">
          I'm a passionate and dedicated individual with a keen interest in
          technology and innovation. With a background in computer science, I
          enjoy exploring new technologies and solving complex problems. Outside
          of work, I love to engage in creative projects, travel, and spend time
          with friends and family.
        </p>
      </div>
    </div>
  );
}
