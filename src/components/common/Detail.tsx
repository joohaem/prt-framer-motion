import React from "react";
import styled from "styled-components";

interface DetailProps {
  children: React.ReactNode;
}

export default function Detail(props: DetailProps) {
  const { children } = props;

  return <StDetailContainer>{children}</StDetailContainer>;
}

const StDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 10;

  padding: 0 3rem 3.3rem;

  font-size: 20px;
`;
