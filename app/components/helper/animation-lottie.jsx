"use client"

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const lottieRef = useRef(null);
  const [direction, setDirection] = useState(1);

  // Setup animation configuration
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
    // Use onComplete callback instead of addEventListener
    onComplete: () => {
      // When animation completes, toggle direction
      setDirection(prevDirection => prevDirection * -1);
      if (lottieRef.current) {
        lottieRef.current.setDirection(direction * -1);
        lottieRef.current.play();
      }
    }
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      {...defaultOptions}
    />
  );
};

export default AnimationLottie;