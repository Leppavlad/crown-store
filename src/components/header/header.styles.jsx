import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const HeaderLogo = styled(Link)``;

export const HeaderNav = styled.nav`
  position: relative;
`;

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuListItem = styled.li``;

export const MenuLink = styled(Link)`
  display: block;
  padding: 10px 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;
