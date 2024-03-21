import React, { useState } from "react";

export default function ProjectPreviews(images) {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  function handleTouchEnd() {
    if (grabbing) {
      setGrabbing(false);
      const deltaX = endX - startX;
      const max = Object.keys(images).length - 1;

      if (deltaX > 0) {
        const newIndex = index - 1;
        if (index === 0) {
          setIndex(max);
        } else {
          setIndex(newIndex);
        }
      } else if (deltaX < 0) {
        const newIndex = index + 1;
        if (index === max) {
          setIndex(0);
        } else {
          setIndex(newIndex);
        }
      }
      setStartX(0);
    }
  }

  return (
    <div id="preview" className="w-full h-[280px] p-2 overflow-hidden">
      <div
        className={`h-[95%] select-none ${
          grabbing ? "" : "transition-all ease-linear duration-300"
        }`}
        style={{
          transform: `translateX(${grabbing ? `${endX - startX}` : "0"}px)`,
        }}
        onMouseLeave={() => setGrabbing(false)}
        onMouseOut={() => setGrabbing(false)}
        onTouchStart={(e) => {
          setEndX(e.touches[0].clientX);
          setStartX(e.touches[0].clientX);
          setGrabbing(true);
        }}
        onTouchMove={(e) => {
          if (grabbing) {
            const threshold = window.innerWidth / 4;
            const deltaX = e.touches[0].clientX - startX;
            if (deltaX > threshold || deltaX < -threshold) {
              handleTouchEnd();
            }
          }
          setEndX(e.touches[0].clientX);
        }}
        onTouchEnd={handleTouchEnd}
        onMouseDown={(e) => {
          setEndX(e.clientX);
          setGrabbing(true);
          setStartX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (grabbing) {
            const width = document.getElementById("preview").offsetWidth;
            const threshold = width / 4;
            const deltaX = e.clientX - startX;
            if (deltaX > threshold || deltaX < -threshold) {
              handleTouchEnd();
            }
          }
          if (startX !== 0) {
            setEndX(e.clientX);
          }
        }}
        onMouseUp={handleTouchEnd}
      >
        <img
          className="pointer-events-none rounded-lg"
          src={images[index]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center h-[5%] pt-2">
        <ul className="flex gap-2">
          {Object.keys(images).map((ind) => {
            return (
              <li
                key={ind}
                className={`border border-color3 border-dashed p-1 rounded-full ${
                  ind == index ? "bg-color3" : ""
                }`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
