import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect } from "react";
import styled from "styled-components";

export default function Motion() {
  // naming for style properties' shortcut
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(135, 226, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg,#e09,#d0e)",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);

  return (
    <StWrapper style={{ background: gradient }}>
      {/* <button onClick={() => x.set(200)}>click me</button> */}
      <StBox style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </StWrapper>
  );
}

const StWrapper = styled(motion.div)`
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
