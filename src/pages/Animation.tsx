import { motion } from "framer-motion";
import styled from "styled-components";

export default function Animation() {
  return (
    <StWrapper>
      <StBox
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{
          type: "spring",
          stiffness: 260, // 100 by default
          damping: 20, // 10 by default
        }}
      />
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
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
