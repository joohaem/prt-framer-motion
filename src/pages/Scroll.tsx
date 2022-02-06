import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

export default function Scroll() {
  const x = useMotionValue(0);

  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  return (
    <StWrapper>
      <button onClick={() => x.set(200)}>click me</button>
      <StBox style={{ x }} drag="x" dragSnapToOrigin />
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
