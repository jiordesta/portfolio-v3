import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectPreviews from "../components/ProjectPreviews";

export default function Projects() {
  const projects = [
    {
      name: "Resaykel",
      desc: "Resaykel is a dynamic e-commerce platform designed to cater to environmentally conscious consumers. Here, users can engage in buying and selling recycled products, promoting sustainability and eco-friendliness. Whether it's repurposed items or goods crafted from recycled materials, Resaykel offers a diverse marketplace for those looking to make a positive impact on the planet. Join our community today and contribute to a greener future through responsible consumption and recycling.",
      tech: [
        "Mongodb",
        "ExpressJs",
        "ReactJs",
        "NodeJs",
        "TailwindCSS",
        "Vite",
        "Firebase",
      ],
      link: "https://resaykel-client.onrender.com/",
      images: [
        "/images/resaykel/1.PNG",
        "/images/resaykel/2.PNG",
        "/images/resaykel/3.PNG",
        "/images/resaykel/4.PNG",
        "/images/resaykel/5.PNG",
        "/images/resaykel/6.PNG",
        "/images/resaykel/7.PNG",
        "/images/resaykel/8.PNG",
      ],
    },
    {
      name: "TODOLIST",
      desc: "Discover the simplicity and efficiency of organizing your tasks with my TodoList web app. Seamlessly designed for productivity, this intuitive application empowers you to manage your daily tasks with ease.",
      tech: ["Mongodb", "ExpressJs", "ReactJs", "NodeJs", "Bootstrap", "Vite"],
      link: "https://todolist-webapp-u0vv.onrender.com/",
      images: [
        "/images/todolist/1.PNG",
        "/images/todolist/2.PNG",
        "/images/todolist/3.PNG",
        "/images/todolist/4.PNG",
        "/images/todolist/5.PNG",
        "/images/todolist/6.PNG",
      ],
    },
    {
      name: "SAMPLE SERVICING DESIGN",
      desc: "Explore our sample servicing design, a harmonious blend of form and function crafted to enhance user experience and streamline operations. With a sleek and intuitive interface, our design prioritizes ease of use and efficiency, ensuring seamless navigation and accessibility for users. From scheduling appointments to managing requests, every aspect is thoughtfully designed to optimize workflow and deliver exceptional service. Elevate your digital presence with our innovative servicing design and unlock new possibilities for your business.",
      tech: ["ReactJs", "Tailwind", "Vite"],
      link: "https://sample-servicing-design.onrender.com/",
      images: [
        "/images/sampleservicing/1.PNG",
        "/images/sampleservicing/2.PNG",
        "/images/sampleservicing/3.PNG",
        "/images/sampleservicing/4.PNG",
        "/images/sampleservicing/5.PNG",
        "/images/sampleservicing/6.PNG",
      ],
    },
  ];

  const { name } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setSelectedProject(projects.find((project) => project.name === name));
    } else {
      setSelectedProject(null);
    }
  }, [name]);

  const ViewProject = () => {
    const { name, desc, tech, link, images } = selectedProject;
    const [showPreview, setShowPreview] = useState(false);
    return (
      <div
        className="fixed inset-0 w-full h-full z-50 bg-black flex justify-center items-center p-4 bg-opacity-50"
        style={{ marginTop: "0" }}
      >
        <div className="w-full md:w-[50%] lg:w-[30%] xl:w-[25%] bg-color2 border border-color3 border-dashed rounded-lg">
          <div
            className={`w-full p-2 space-y-2 ${
              showPreview ? "h-[100px]" : ""
            } overflow-hidden`}
          >
            <div className="w-full flex justify-between">
              <img
                src={`${
                  showPreview ? "/icons/notshowprev.svg" : "/icons/preview.svg"
                }`}
                width={35}
                height={35}
                alt=""
                className="cursor-pointer"
                onClick={() => setShowPreview(!showPreview)}
              />
              <img
                src="/icons/close.svg"
                width={35}
                height={35}
                alt=""
                className="cursor-pointer"
                onClick={() => navigate("/projects")}
              />
            </div>
            <h1 className="bg-white bg-opacity-5 text-xl font-bold p-2">
              {name}
            </h1>
            <p className="bg-white bg-opacity-5 h-[150px] custom-scrollbar p-2">
              {desc}
            </p>
            <ul className="flex flex-wrap gap-1 custom-scrollbar p-1">
              {tech.map((t) => {
                return (
                  <li
                    key={t}
                    className="border border-color3 border-dashed rounded-lg px-1 bg-white bg-opacity-5 drop-shadow-md"
                  >
                    {t}
                  </li>
                );
              })}
            </ul>
            <button
              className="bg-white bg-opacity-5 p-2 w-full underline truncate overflow-hidden"
              onClick={() => {
                window.open(link, "_blank", "noopener,noreferrer");
              }}
            >
              open in new tab
            </button>
          </div>
          {showPreview && <ProjectPreviews {...images} />}
        </div>
      </div>
    );
  };

  const Project = (project) => {
    const [show, setShow] = useState(false);
    return (
      <div
        className="relative h-[170px] w-full cursor-pointer border bg-color2 border-color3 border-dashed rounded-lg flex justify-end transition-all ease-in-out duration-500 drop-shadow-md hover:translate-y-[-10px]"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => {
          navigate(`/projects/show/${project.name}`);
        }}
      >
        <div className="bg-color1 relative rounded-tr-lg w-1/2 h-1/4 border-b border-l rounded-bl-lg border-color3 border-dashed flex justify-center items-center">
          <h1 className="truncate overflow-hidden">{project.name}</h1>
        </div>
      </div>
    );
  };

  return (
    <section className="h-[90%] pb-4 relative p-4 space-y-4 custom-scrollbar m-0">
      <h1 className="bg-white bg-opacity-5 p-4">
        Explore my diverse range of projects, each showcasing my passion for
        technology and innovation. From dynamic e-commerce platforms to
        interactive web applications, my projects demonstrate my proficiency in
        various technologies and my commitment to delivering impactful
        solutions.
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => {
          return (
            <li key={project.name}>
              <Project {...project} />
            </li>
          );
        })}
      </ul>
      {selectedProject && <ViewProject />}
    </section>
  );
}
