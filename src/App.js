import React, { Fragment, useState } from "react";
import styled from "styled-components";
import TextField from "./components/TextField";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  height: auto;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;

const Heading = styled.h1`
  position: relative;
`;

function App() {
  let [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // Check if the input field is empty
    if (value === "") {
      return false;
    }
    // Push values into the todo array []
    setTodo([...todo, value]);

    // Clear the input value
    setValue("");
  }

  function handleDelete(value) {
    const newList = todo.filter(item => item !== value)
    setTodo(newList);
  }

  return (
    <Fragment>
      <AppContainer>
        <Container>
          <Heading> TODOList.</Heading>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              placeholder="What is your main focus today?"
              value={value}
              handleOnChange={(e) => setValue(e.target.value)}
            />
            {
              // Show the button if the input value is populated
              value !== "" ? <Button type="submit">ADD</Button> : ""
            }
          </form>
          {
            // Display all the card component
            todo.length !== 0
              ? todo.map((item, index) => (
                  <Card key={index} handleDelete={() => handleDelete(item)}>
                    {item}
                  </Card>
                ))
              : null
          }
        </Container>
      </AppContainer>
    </Fragment>
  );
}

export default App;
