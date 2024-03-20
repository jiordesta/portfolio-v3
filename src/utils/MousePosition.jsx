import React, { useState, useEffect } from "react";

function MousePosition({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { position })
      )}
    </>
  );
}

export default MousePosition;
