import React, { useState } from 'react';
import { motion, useTransform, useMotionValue, useAnimation } from 'framer-motion';
import styled from 'styled-components';

let CheckboxWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
  cursor: pointer;
`;

let CheckboxContainer = styled(motion.div)`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 35%;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  margin: auto;
  display: grid;
  place-items: center center;
  &.front {
    overflow: hidden;
  }
  &.back {
    border: red solid 3px;
  }
`;

let Checkmark = styled(motion.svg)`
  fill: none;
  position: relative;
  padding-left: 1.6rem;
  padding-bottom: .7rem;
  path {
    stroke-width: 35;
    stroke-linecap: round;
  }
  &.front {
    path {
      stroke: white;
    }
  }
  &.back {
    path {
      stroke: red;
    }
  }
`;

let LinesContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotate(-33deg);
  border-radius: 50%;
  position: absolute;
  top: 0rem;
  right: -.5rem;
`;

let Line = styled(motion.div)`
  height: 2px;
  width: 13px;
  background: red;
  border-radius: 50%;
  transform-origin: left;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  margin-left: 2.5rem;
  &.1 {
    transform: rotate(-25deg);
  }
  &.3 {
    transform: rotate(25deg);
  }
`;


const variants = {
  checked: { 
    pathLength: 1, 
    transition: { duration: .3 } 
  },
  unchecked: { 
    pathLength: 0, 
    transition: { duration: .3 } 
  }
}

export default function ExploreCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [.05, .15], [0, 1]);
  const lineControls = useAnimation();
  const lineAnimation = async () => {
    await lineControls.start({ 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: .15, delay: .2 }
    });
    await lineControls.start({ 
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      transition: { duration: .15 }
    });
    lineControls.start({ 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
      transition: { duration: 0 } 
    });
  }
  return (
    <CheckboxWrapper
      onClick={() => {
        !isChecked && lineAnimation();
        setIsChecked(!isChecked);
      }}
    >
      <CheckboxContainer 
        className="back"
        animate={{ 
          background: isChecked ? 'rgb(255, 0, 0)' : 'rgb(255, 255, 255)',
          transition: { delay: isChecked ? 0 : .3 }
        }}
      >
          <Checkmark 
            className="back"
            viewBox="0 0 215 180" 
            animate={isChecked ? "checked" : "unchecked"}
          >
            <motion.path 
              d="M21 88.9819L40.3022 133.001C46.7847 147.784 67.1425 149.146 75.5651 135.376C107.35 83.4098 123.233 60.8675 200 27" 
              variants={variants}
              style={{ pathLength, opacity }}
              strokeDasharray="1 1"
            />
          </Checkmark>
          <LinesContainer>
            <Line 
              className="1" 
              animate={lineControls} 
            />
            <Line 
              className="2" 
              animate={lineControls} 
            />
            <Line 
              className="3" 
              animate={lineControls} 
            />
          </LinesContainer>
      </CheckboxContainer>
      <CheckboxContainer className="front">
        <Checkmark 
          className="front"
          viewBox="0 0 215 180" 
          animate={isChecked ? "checked" : "unchecked"}
        >
          <motion.path 
            d="M21 88.9819L40.3022 133.001C46.7847 147.784 67.1425 149.146 75.5651 135.376C107.35 83.4098 123.233 60.8675 200 27" 
            variants={variants}
            style={{ pathLength, opacity }}
            strokeDasharray="1 1"
          />
        </Checkmark>
      </CheckboxContainer>
    </CheckboxWrapper>
  )
}
