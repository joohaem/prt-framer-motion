import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [navIndex, setNavIndex] = useState<number>(0);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    switch (pathname) {
      case "/1":
        setNavIndex(0);
        break;
      case "/2":
        setNavIndex(1);
        break;
      case "/3":
        setNavIndex(2);
        break;
      case "/4":
        setNavIndex(3);
        break;
      case "/5-0":
        setNavIndex(4);
        break;
      case "/5":
        setNavIndex(5);
        break;
      case "/6":
        setNavIndex(6);
        break;
      case "/7":
        setNavIndex(7);
        break;
      case "/8":
        setNavIndex(8);
        break;
      case "/9":
        setNavIndex(9);
        break;
    }
  }, [pathname]);

  return (
    <StNav>
      <StUl>
        <StLi current={pathname === "/1"}>
          <StLink to="/1">Animation</StLink>
        </StLi>
        <StLi current={pathname === "/2"}>
          <StLink to="/2">Variants</StLink>
        </StLi>
        <StLi current={pathname === "/3"}>
          <StLink to="/3">Gestures</StLink>
        </StLi>
        <StLi current={pathname === "/4"}>
          <StLink to="/4">Drag</StLink>
        </StLi>
        <StLi current={pathname === "/5-0"}>
          <StLink to="/5-0">Motion</StLink>
        </StLi>
        <StLi current={pathname === "/5"}>
          <StLink to="/5">Scroll</StLink>
        </StLi>
        <StLi current={pathname === "/6"}>
          <StLink to="/6">Path</StLink>
        </StLi>
        <StLi current={pathname === "/7"}>
          <StLink to="/7">Slider</StLink>
        </StLi>
        <StLi current={pathname === "/8"}>
          <StLink to="/8">Layout</StLink>
        </StLi>
        <StLi current={pathname === "/9"}>
          <StLink to="/9">ModalLayout</StLink>
        </StLi>
      </StUl>
    </StNav>
  );
}

const StNav = styled.nav`
  position: fixed;
  top: 0;

  z-index: 10;

  padding: 3.3rem 3rem 0;

  font-size: 20px;
`;

const StUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StLi = styled.li<{ current: boolean }>`
  font-weight: ${(props) => (props.current ? "bold" : "inherit")};
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 4.8rem;

  text-align: center;
`;
