import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function Layout() {
  const [isLeft, setIsLeft] = useState(true);

  const toggleLR = () => {
    setIsLeft((prev) => !prev);
  };

  return (
    <StWrapper onClick={toggleLR}>
      <StBox>
        {isLeft && (
          <StCircle layoutId="circle" style={{ borderRadius: "35px" }} />
        )}
      </StBox>
      <StBox>
        {!isLeft && (
          <StCircle layoutId="circle" style={{ borderRadius: "15px" }} />
        )}
      </StBox>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StBox = styled(motion.div)`
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const StCircle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
