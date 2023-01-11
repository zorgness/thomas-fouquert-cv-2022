import React from "react";

export const useAnimationOnScroll = (blocks) => {
  React.useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.value.includes("left")) {
            entry.target.classList.add("fade-in1");
          } else {
            entry.target.classList.add("fade-in2");
          }
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const myObserver = new IntersectionObserver(callback, options);
    blocks.forEach((block) => {
      myObserver.observe(block);
    });
    return () => {
      myObserver.disconnect();
    };
  }, [blocks]);
};
