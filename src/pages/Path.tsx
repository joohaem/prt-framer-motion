import { motion } from "framer-motion";
import styled from "styled-components";

export default function Path() {
  const svgVariants = {
    start: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    end1: {
      pathLength: 1,
      fill: "#F53000",
      // transition: { duration: "3" },
    },
    end2: {
      pathLength: 1,
      fill: "#FF4C00",
      // transition: { duration: "3" },
    },
  };

  return (
    <StWrapper>
      <StSvg
        // width="200"
        // height="200"
        // stroke="#F53000"
        // strokeWidth="0.1"
        viewBox="0 0 25 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="end1"
          transition={{
            default: { duration: 2 },
            fill: { duration: 3, delay: 1 },
          }}
          d="M5.0416 10.4955H0.553223L5.73268 15.6277V12.053V10.4955H5.0416Z"
        ></motion.path>
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="end1"
          transition={{
            default: { duration: 2 },
            fill: { duration: 3, delay: 1 },
          }}
          d="M9.15543 15.6774H5.78174L8.7198 18.6154L10.9139 20.8088V15.6774H9.15543Z"
        ></motion.path>
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="end2"
          transition={{
            default: { duration: 2 },
            fill: { duration: 3, delay: 1 },
          }}
          d="M23.8664 15.8424V15.6774H23.8103C23.3138 14.2728 22.425 13.0548 21.2758 12.1524C20.5888 11.6126 19.808 11.1874 18.9624 10.9023C19.0128 10.7686 19.0601 10.6333 19.1025 10.4955C19.3155 9.80767 19.43 9.07656 19.43 8.31822C19.43 7.24757 19.1994 6.23138 18.7886 5.31369C18.2096 4.02123 17.2687 2.92656 16.0948 2.15781C14.9497 1.40828 13.5827 0.968648 12.1133 0.96064H12.1822C12.1453 0.959839 12.219 0.959839 12.1822 0.959839C12.1589 0.959839 12.1341 0.96064 12.1101 0.96064C12.0973 0.96064 12.0845 0.959839 12.0717 0.959839C12.0596 0.959839 12.0476 0.96064 12.0356 0.96064L10.9129 0.959839H5.73428H5.73268H0.553223V5.31369V6.14089V10.4475V10.4947H0.600468H5.0416H5.73268V12.0523V15.6269V15.6758V20.8569V26.0379H10.9137H16.0948H16.1436H16.4824C18.2913 26.0379 19.9545 25.4181 21.2758 24.3811C22.425 23.4786 23.3138 22.2606 23.8103 20.856H23.8664V20.6911C24.117 19.9279 24.2547 19.1128 24.2547 18.2655C24.2547 17.4199 24.117 16.6055 23.8664 15.8424ZM11.0947 1.0271C11.0346 1.03511 10.9738 1.04232 10.9137 1.05193C10.9714 1.04312 11.0322 1.03511 11.0947 1.0271ZM5.73428 6.14169H10.9137H12.0725C13.2744 6.14169 14.2498 7.11625 14.2498 8.31902C14.2498 9.52099 13.2752 10.4963 12.0725 10.4963H10.9137H5.73428V6.14169ZM16.0948 20.8585H10.9626L10.9137 20.8096L8.71959 18.6155L5.78152 15.6774H9.15521H10.9137H16.0948H16.4832C17.4145 15.6774 18.2289 16.1707 18.6861 16.909C18.9304 17.3046 19.0745 17.769 19.0745 18.2679C19.0745 18.7668 18.9312 19.2313 18.6861 19.6269C18.2297 20.3652 17.4153 20.8585 16.4832 20.8585H16.0948Z"
        ></motion.path>
      </StSvg>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StSvg = styled.svg`
  width: 200px;
  height: 200px;
  stroke: #f53000;
  stroke-width: 0.3;
`;
