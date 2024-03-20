import React from "react";

export default function Skills() {
  const techSkills = [
    "MongoDB",
    "Express",
    "React.js",
    "Node.js",
    "Firebase",
    "Redux",
    "Ant Design",
    "Bootstrap",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Figma",
    "Draw.io",
    "Git",
    "GitLab",
    "C",
    "Java",
    "Python",
    "Pygame",
    "Godot",
    "Photoshop",
    "Blender",
    "Aseprite",
    "Piskel",
    "Machine Learning",
    "Webots Simulation",
  ];
  const softSkills = [
    "Effective teamwork",
    "Adaptability",
    "Critical thinking",
    "Analytical reasoning",
    "leadership",
    "verbal communication",
    "written communication",
    "presentation communication",
  ];
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full px-4 md:px-16 lg:px-32 space-y-2 custom-scrollbar">
        <h1 className="text-base font-bold bg-white bg-opacity-5 p-4">
          Throughout my journey, I've acquired a diverse set of skills spanning
          various domains of technology. From web development and programming
          languages to soft skills like communication and leadership
        </h1>
        <h1 className="text-base">Technical Skills:</h1>
        <ul className="flex flex-wrap gap-1">
          {techSkills.map((skill) => {
            return (
              <li
                key={skill}
                className="border border-color3 border-dashed px-2 rounded-md bg-color2"
              >
                {skill}
              </li>
            );
          })}
        </ul>
        <h1 className="text-base">Soft Skills:</h1>
        <ul className="flex flex-wrap gap-1">
          {softSkills.map((skill) => {
            return (
              <li
                key={skill}
                className="border border-color3 border-dashed px-2 rounded-md bg-color2"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
