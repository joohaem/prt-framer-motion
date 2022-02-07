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

  const menuListsData = [
    {
      order: "1",
      theme: "Animation",
    },
    {
      order: "2",
      theme: "Variants",
    },
    {
      order: "3",
      theme: "Gestures",
    },
    {
      order: "4",
      theme: "Drag",
    },
    {
      order: "5",
      theme: "Motion",
    },
    {
      order: "6",
      theme: "Scroll",
    },
    {
      order: "7",
      theme: "Path",
    },
    {
      order: "8",
      theme: "Slider",
    },
    {
      order: "9",
      theme: "Layout",
    },
    {
      order: "10",
      theme: "ModalLayout",
    },
  ];
  const detailsData = (targetPathname: string) => {
    switch (targetPathname) {
      case "/1":
        return <Detail>Refresh it !</Detail>;
      case "/2":
        return <Detail>Refresh it !</Detail>;
      case "/3":
        return <Detail>Hover n Click it !</Detail>;
      case "/4":
        return <Detail>Drag it !</Detail>;
      case "/5":
        return <Detail>Drag it on X-axis !</Detail>;
      case "/6":
        return <Detail>Scroll !</Detail>;
      case "/7":
        return <Detail>Refresh it !</Detail>;
      case "/8":
        return <Detail>Click buttons !</Detail>;
      case "/9":
        return <Detail>Click anywhere !</Detail>;
      case "/10":
        return <Detail>Click it !</Detail>;
    }
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
            {menuListsData.map((menuData) => (
              <StLi
                current={pathname === `/${menuData.order}`}
                key={`menu-${menuData.order}`}
              >
                <StLink to={`/${menuData.order}`}>{menuData.theme}</StLink>
              </StLi>
            ))}
          </StUl>
        )}
      </StNav>
      {detailsData(pathname)}
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
