import { useSpring, animated } from '@react-spring/web'
import { ReferenceObject } from 'popper.js';
import { useEffect, useState, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode,
  des: {x: number, y: number},
  pos: number
}

export default function ScrollSpy({children, des = {x:0 , y:0}, pos = 0}: Props) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0},
  }))

  const [scrollPosition, setScrollPosition] = useState(0);
  const [transi, settransi] = useState(true)
  const sectionRef = useRef<any>();

  useEffect(() => {
    if(transi){

      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
      // console.log(scrollPosition);
      if (scrollPosition > pos && transi) {
        handleClick()
        settransi(false);
      }
      window.addEventListener("scroll", handleScroll);
      // const sectionPosition = sectionRef.current.getBoundingClientRect();
      // console.log(sectionPosition);
    }

  }, [scrollPosition,transi]);

  const handleClick = () => {
    // console.log(springs);
    
    api.start({
      from: {
        opacity: 0,
        x: des.x,
      },
      to: {
        x: des.y,
        opacity: 1,
      },
    })
  }

  return (
    <>
      <animated.div
          style={{
            ...springs,
          }}
        >
          {children}
      </animated.div>
    </>
  )
}