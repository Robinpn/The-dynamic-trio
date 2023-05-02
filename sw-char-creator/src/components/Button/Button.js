import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #276460;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  padding: 10px 16px;
  text-align: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #2ff924;
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
    /* border: 2px solid #2ff923; */
  }
  &:active {
    box-shadow: #2ff924 0px 10px 55px, #2ff924 0px -12px 30px;
    transform: translateY(4px);
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled type={props.type} onClick={props.onClick}>
      {props.name}
    </ButtonStyled>
  );
};

export default Button;
