import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";

export default function Scroll() {
  // naming for style properties' shortcut
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <StWrapper>
      <StBox style={{ scale }}>
        <StInnerBox style={{ height }} />
      </StBox>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 150vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBox = styled(motion.div)`
  width: 200px;
  height: 200px;

  overflow: hidden;

  background-color: white;
  border-radius: 15px;
`;

const StInnerBox = styled(motion.div)`
  background-color: #ab0cf9;
`;
