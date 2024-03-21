import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/aboutme/Hero";
import Skills from "../components/aboutme/Skills";
import Education from "../components/aboutme/Education";
import Notfound from "./Notfound";
import Github from "../components/aboutme/Github";

export default function Aboutme() {
  const classIndicator = "border border-color3 border-dashed p-1 rounded-full";
  const { section } = useParams();
  const navigate = useNavigate();
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  function handleTouchEnd() {
    if (grabbing) {
      setGrabbing(false);
      const deltaX = endX - startX;
      if (deltaX > 0) {
        if (section === "education") {
          navigate("/aboutme/introduction");
        } else if (section === "skills") {
          navigate("/aboutme/education");
        } else if (section === "github") {
          navigate("/aboutme/skills");
        }
      } else if (deltaX < 0) {
        if (section === "introduction") {
          navigate("/aboutme/education");
        } else if (section === "education") {
          navigate("/aboutme/skills");
        } else if (section === "skills") {
          navigate("/aboutme/github");
        }
      }
      setStartX(0);
    }
  }

  return (
    <section className="h-[90%] pb-4 overflow-hidden">
      <div
        className={`h-full w-full disable-select ${
          grabbing ? "" : "transition-all ease-linear duration-300"
        }`}
        style={{
          transform: `translateX(${grabbing ? `${endX - startX}` : "0"}px)`,
        }}
        onMouseOut={() => setGrabbing(false)}
        onTouchStart={(e) => {
          setEndX(e.touches[0].clientX);
          setStartX(e.touches[0].clientX);
          setGrabbing(true);
        }}
        onTouchMove={(e) => {
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
            const threshold = window.innerWidth / 4;
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
        {section === "introduction" ? (
          <Hero />
        ) : section === "education" ? (
          <Education />
        ) : section === "skills" ? (
          <Skills />
        ) : section === "github" ? (
          <Github />
        ) : (
          <Notfound />
        )}
      </div>
      <ul className="flex justify-center items-end gap-2 w-full">
        <li
          onClick={() => {
            navigate("/aboutme/introduction");
          }}
          className={`${classIndicator} ${
            section === "introduction" ? "bg-color3" : ""
          }`}
        />
        <li
          onClick={() => {
            navigate("/aboutme/education");
          }}
          className={`${classIndicator} ${
            section === "education" ? "bg-color3" : ""
          }`}
        />
        <li
          onClick={() => {
            navigate("/aboutme/skills");
          }}
          className={`${classIndicator} ${
            section === "skills" ? "bg-color3" : ""
          }`}
        />
        <li
          onClick={() => {
            navigate("/aboutme/github");
          }}
          className={`${classIndicator} ${
            section === "github" ? "bg-color3" : ""
          }`}
        />
      </ul>
    </section>
  );
}
