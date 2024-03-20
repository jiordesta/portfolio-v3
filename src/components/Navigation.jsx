import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavigationPaths = ["/aboutme", "/projects", "/contacts"];
  const shouldShowNavigation = showNavigationPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const classLinkParent =
    "flex w-full justify-center md:justify-end justify-center";
  const classLinkChild =
    "flex gap-2 hover:text-white bg-color2 p-2 rounded-md hover:bg-opacity-25 transition-all ease-in-out duration 300";
  return (
    <>
      {shouldShowNavigation ? (
        <section className="sticky top-0 z-40 h-[10%] flex justify-end items-center bg-color1">
          <ul className="menu w-full md:w-[60%] flex justify-evenly">
            <li className={classLinkParent}>
              <button
                className={classLinkChild}
                onClick={() => {
                  navigate("/aboutme/introduction");
                }}
              >
                <img src="/icons/about.svg" width={30} alt="" />
                <h1 className="hidden md:block">About Me</h1>
              </button>
            </li>
            <li className={classLinkParent}>
              <button
                className={classLinkChild}
                onClick={() => {
                  navigate("/projects");
                }}
              >
                <img src="/icons/projects.svg" width={30} alt="" />
                <h1 className="hidden md:block">My Projects</h1>
              </button>
            </li>
            <li className={classLinkParent}>
              <button
                className={classLinkChild}
                onClick={() => {
                  navigate("/contacts");
                }}
              >
                <img src="/icons/contact.svg" width={30} alt="" />
                <h1 className="hidden md:block">Contact Me</h1>
              </button>
            </li>
          </ul>
        </section>
      ) : null}
    </>
  );
}
