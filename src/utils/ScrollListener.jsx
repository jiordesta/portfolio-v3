import React, { useEffect } from "react";

function ScrollListener({ onScrollToTop, onScrollToBottom }) {
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Check if the user has scrolled to the top of the document
      if (scrollPosition === 0) {
        onScrollToTop();
      }

      // Check if the user has scrolled to the bottom of the document
      if (scrollPosition + viewportHeight >= documentHeight) {
        onScrollToBottom();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollToTop, onScrollToBottom]);

  return null;
}

export default ScrollListener;
