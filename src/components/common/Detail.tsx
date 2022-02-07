import React from "react";
import styled from "styled-components";

interface DetailProps {
  children: React.ReactNode;
}

export default function Detail(props: DetailProps) {
  const { children } = props;

  return (
    <StDetailContainer>
      <StIcRefresh className="material-icons">refresh</StIcRefresh>
      <span>{children}</span>
    </StDetailContainer>
  );
}

const StDetailContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  right: 20%;
  bottom: 0;
  left: 0;

  z-index: 10;

  padding: 0 3rem 3.3rem;

  font-size: 20px;
`;

const StIcRefresh = styled.span`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
