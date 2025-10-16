import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const count = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => {
      clearInterval(count);
    };
  }, [progress]);
  return (
    <div className="progressBarContainer">
      <div
        className="progressBar"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}% )`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {animatedProgress}
      </div>
    </div>
  );
};

export default ProgressBar;
