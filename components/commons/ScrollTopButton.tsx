import { ArrowUpward } from "@mui/icons-material";
import { Fab, useScrollTrigger } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";

export default function ScrollTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1000,
  });

  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));

  useEffect(() => {
    const showInfo = () => {

        api.start({
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        });
      };
    
      const shadowInfo = () => {
        // console.log(springs);
    
        api.start({
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        });
      };
    // console.log(trigger);
    if (!trigger) {
        shadowInfo();
    } else {
        showInfo();
    }

  }, [trigger, api]);


  return (
    <>
      <animated.div
        style={{
          ...springs,
        }}
      >
        <Fab
          color="secondary"
          aria-label="up"
          sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
            transition: 0.2,
          }}
          onClick={handleClick}
        >
          <ArrowUpward />
        </Fab>
      </animated.div>
    </>
  );
}
