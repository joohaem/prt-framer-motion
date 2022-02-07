import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function Slider() {
  const [idxVisible, setIdxVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setIsBack(false);
    setIdxVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsBack(true);
    setIdxVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const boxVariants = {
    invisible: (isBack: boolean) => {
      return {
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
      };
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (isBack: boolean) => {
      return {
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: { duration: 1 },
      };
    },
  };

  return (
    <StWrapper>
      <AnimatePresence custom={isBack}>
        <StBox
          custom={isBack}
          variants={boxVariants}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={idxVisible}
        >
          {idxVisible}
        </StBox>
      </AnimatePresence>
      <StBtnWrapper>
        <StBtn onClick={prevPlease}>prev</StBtn>
        <StBtn onClick={nextPlease}>next</StBtn>
      </StBtnWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StBox = styled(motion.div)`
  width: 400px;
  height: 200px;

  position: absolute;
  bottom: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const StBtnWrapper = styled.div`
  position: absolute;
  top: 60%;

  display: flex;
  gap: 20px;
`;

const StBtn = styled.button`
  width: 200px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ff4c00;
  color: white;

  outline: none;
  border-radius: 40px;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
