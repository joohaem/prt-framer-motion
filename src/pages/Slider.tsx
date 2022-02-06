import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function Slider() {
  const [idxVisible, setIdxVisible] = useState(1);
  const nextPlease = () =>
    setIdxVisible((prev) => (prev === 10 ? 10 : prev + 1));
  const prevPlease = () => setIdxVisible((prev) => (prev === 1 ? 1 : prev - 1));

  const boxVariants = {
    invisible: {
      x: 500,
      opacity: 0,
      scale: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
  };

  return (
    <StWrapper>
      <AnimatePresence>
        <StBox
          variants={boxVariants}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={idxVisible}
        >
          {idxVisible}
        </StBox>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBox = styled(motion.div)`
  width: 400px;
  height: 200px;

  position: absolute;
  top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
