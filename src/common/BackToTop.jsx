import React, { useEffect, useState } from "react";
import backToTopImg from "../assets/images/webp/back-to-top.webp";

const BackToTop = () => {
  const [scrollTop, setScrollToTop] = useState(false);
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const setHendler = () => {
    setScrollToTop(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  });

  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-[10px] bottom-[10px] animate-bounce z-40 cursor-pointer"
        >
          <img
            className="size-16 max-md:size-12"
            src={backToTopImg}
            alt="back to top"
          />
        </button>
      )}
    </>
  );
};
export default BackToTop;
