import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl bg-white bg-opacity-5 p-4">
        Welcome to my portfolio
      </h1>
      <button
        className="underline"
        onClick={() => navigate("/aboutme/introduction")}
      >
        view portfolio
      </button>
    </div>
  );
}
