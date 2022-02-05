import { motion } from "framer-motion";
import styled from "styled-components";

export default function Variants() {
  const boxVariants = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        delayChildren: 0.3, // 자식 전체에 대한 transition
        staggerChildren: 0.2, // 자식에 단계적으로 일어나는 transition
      },
    },
  };

  const circleVariants = {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <StWrapper>
      <StBox variants={boxVariants} initial="start" animate="end">
        <StCircle variants={circleVariants} />
        <StCircle variants={circleVariants} />
        <StCircle variants={circleVariants} />
        <StCircle variants={circleVariants} />
      </StBox>
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
  width: 200px;
  height: 200px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const StCircle = styled(motion.div)`
  height: 70px;
  width: 70px;

  place-self: center;

  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
