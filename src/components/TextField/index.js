import React, { Fragment } from "react";
import styled from "styled-components";
import "./styles.css";

const Input = styled.input`
  height: 50px;
  width: 100%;
  padding-left: 20px;
  font-size: 15px;
  border: 1px solid #ebeaeb;
  transition: 300ms all ease-in-out;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.31);
  background: white;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid#eee;
    font-size: 17px;
  }
`;
function TextField({ type, handleOnChange, placeholder, value }) {
    return (
      <Fragment>
        <Input
          type={type}
          onChange={handleOnChange}
          placeholder={placeholder}
          className="text_field--input"
          value={value}
        />
      </Fragment>
    );
}

export default TextField;
