import { motion } from "framer-motion";
import styled from "styled-components";

export default function Variants() {
  return (
    <StWrapper>
      <StBox>
        <StCircle />
        <StCircle />
        <StCircle />
        <StCircle />
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
