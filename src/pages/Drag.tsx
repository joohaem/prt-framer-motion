import { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function Drag() {
  const containerRef = useRef(null);

  return (
    <StWrapper>
      <StBox ref={containerRef}>
        <StInnerBox
          drag
          dragSnapToOrigin
          dragElastic={1}
          dragConstraints={containerRef}
        />
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

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ac0cfa;
  border-radius: 45px;

  overflow: hidden;
`;

const StInnerBox = styled(motion.div)`
  width: 110px;
  height: 110px;

  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
