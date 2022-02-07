import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Detail from "./Detail";

export default function Header() {
  const [isShowingMenuList, setIsShowingMenuList] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleShowingMenuList = () => {
    setIsShowingMenuList((prev) => !prev);
  };

  return (
    <>
      <StNav>
        {!isShowingMenuList && (
          <StIcMenu
            className="material-icons"
            onClick={toggleShowingMenuList}
            layoutId="menu"
          >
            menu
          </StIcMenu>
        )}
        {isShowingMenuList && (
          <StUl onClick={toggleShowingMenuList} layoutId="menu">
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
        )}
      </StNav>
      <Detail>asd</Detail>
    </>
  );
}

const StNav = styled.nav`
  position: fixed;
  top: 0;

  z-index: 10;

  padding: 3.3rem 3rem 0;

  font-size: 20px;
  font-weight: 500;
`;

const StIcMenu = styled(motion.span)`
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

const StUl = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
`;

const StLi = styled.li<{ current: boolean }>`
  font-weight: ${(props) => (props.current ? "800" : "inherit")};
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 4.8rem;

  text-align: center;
`;
