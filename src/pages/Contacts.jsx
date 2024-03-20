import React, { useState } from "react";

export default function Contacts() {
  const contacts = [
    {
      name: "GMAIL",
      value:
        "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCldspqlKWGTzltrpZjGVhKwCFNxtjPbTLcdbmCCqRXtkBCWPhKRVbtJjSjHNPWHXDXq",
      image: "/images/gmail.webp",
    },
    {
      name: "UPWORK",
      value: "https://www.upwork.com/freelancers/~01c4da5d6c884c2be4",
      image: "/images/upwork.png",
    },
    {
      name: "LINKEDIN",
      value: "https://www.linkedin.com/in/john-irson-ordesta-130014297/",
      image: "/images/linkedin.jpg",
    },
    {
      name: "FACEBOOK",
      value: "https://web.facebook.com/jiordesta",
      image: "/images/facebook.webp",
    },
    {
      name: "MESSENGER",
      value: "https://web.facebook.com/messages/t/100087130744992",
      image: "/images/messenger.jpg",
    },
    {
      name: "ONLINEJOBSPH",
      value: "https://www.onlinejobs.ph/jobseekers/info/3265894",
      image: "/images/onlinejobs.jpg",
    },
    {
      name: "SKYPE",
      value: "jiordesta@gmail.com",
      image: "/images/skype.png",
    },
  ];

  const Contact = ({ name, value, image }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        className="flex w-full border border-color3 border-dashed rounded-lg bg-color2 drop-shadow-lg transition-all ease-in-out duration-300 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(value, "_blank", "noopener,noreferrer")}
      >
        <div
          className={`w-[180px] h-[120px] ${
            hovered ? "p-2" : ""
          } transition-all ease-in-out duration-500`}
        >
          <img
            className={`transition-all ease-in-out duration-500 ${
              hovered ? "" : "rounded-lg"
            }`}
            src={`${image}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center w-full truncate overflow-hidden p-4">
          {hovered ? value : name}
        </div>
      </div>
    );
  };

  return (
    <section className="h-[90%] pb-4 custom-scrollbar">
      <div className="custom-overflow">
        <h1 className="text-base font-bold bg-white bg-opacity-5 p-4">
          In this section, you'll find all the ways to reach out and connect
          with me. Whether you have a question, want to collaborate on a
          project, or simply want to say hello, I'm just a message away. Feel
          free to explore the various contact options provided and let's start a
          conversation!
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
          {contacts.map((contact) => {
            return (
              <li key={contact.name}>
                <Contact {...contact} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
