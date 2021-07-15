import styled, { css } from "styled-components";

const classBlack = css`
  background-color: #000;
  border-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    border-color: #000;
    color: #000;
  }
  &:focus {
    outline: 2px solid #555;
  }
`;

const classBlue = css`
  background-color: #4285f4;
  border-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #fff;
    border-color: #4285f4;
    color: #4285f4;
  }
  &:focus {
    outline: 2px solid #555;
  }
`;

const classWhite = css`
  background-color: #fff;
  border-color: transparent;
  color: #000;

  &:hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  &:focus {
    outline: 2px solid #555;
  }
`;

const classWhiteTransparent = css`
  background-color: #ffffff99;
  border-color: transparent;
  color: #fff;

  &:hover {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  &:focus {
    outline: 2px solid #555;
  }
`;

const buttonStyles = (props) => {
  switch (props.mode) {
    case "black":
      return classBlack;
    case "blue":
      return classBlue;
    case "white":
      return classWhite;
    case "whiteTransparent":
      return classWhiteTransparent;
    default:
      return classWhite;
  }
};

export const Button = styled.button`
  min-width: 170px;
  width: ${(props) => props.width || "auto"};
  height: 50px;
  padding: 0 40px;
  text-transform: uppercase;
  border-width: ${(props) => props.borderWidth || "1px"};
  border-style: solid;
  cursor: pointer;

  ${buttonStyles}
`;
