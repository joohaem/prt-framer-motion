import { motion } from "framer-motion";
import styled from "styled-components";

export default function Gestures() {
  const boxVariants = {
    hover: { scale: 1.2, rotate: 90 },
    click: { scale: 0.8, rotate: -90, borderRadius: "100%" },
  };

  return (
    <StWrapper>
      <StBox variants={boxVariants} whileHover="hover" whileTap="click" />
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
