import React, { Fragment } from "react";
import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  width: 150px;
  height: 40px;
  border: 1px solid #999999;
  background: white;
  margin-bottom: 20px;
  color: #8b7575;
  cursor: pointer;

  &:hover::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
function Button({ children, type }) {
  return (
    <Fragment>
      <Btn type={type}>{children}</Btn>
    </Fragment>
  );
}

export default Button;
