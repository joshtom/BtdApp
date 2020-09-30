import React, { Fragment } from "react";
import styled from "styled-components";

const CardList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  padding: 10px;
  width: 100%;
  background: white;
  border: 1px solid #ddcfcf;
  border-radius: 4px;
  font-size: 20px;
  word-break: break-all;
`;

function Card({ children, handleDelete }) {
  return (
    <Fragment>
      <CardList>
        {children}
        <span
          style={{ cursor: "pointer" }}
          onClick={handleDelete}
          role="img"
          aria-label="delete"
        >
          ❌
        </span>
      </CardList>
    </Fragment>
  );
}

export default Card;
