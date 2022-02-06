import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function ModalLayout() {
  const [whatId, setWhatId] = useState<null | string>(null);
  console.log(whatId);
  return (
    <StWrapper>
      <StGrid>
        {["1", "2", "3", "4"].map((idx) => (
          <StBox onClick={() => setWhatId(idx)} layoutId={idx} key={idx} />
        ))}
      </StGrid>
      <AnimatePresence>
        {whatId && (
          <StOverlay
            onClick={() => setWhatId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <StBox layoutId={whatId} style={{ width: "300px" }} />
          </StOverlay>
        )}
      </AnimatePresence>
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

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 20px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const StBox = styled(motion.div)`
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const StOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;
