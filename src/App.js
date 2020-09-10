import React, { Component, Fragment } from 'react';
import TextField from './components/TextField';
import Card from './components/Card';
import Button from './components/Button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: [],
      value: '',
     }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // Check if the input field is empty 
    if(this.state.value === '') {
      return false;
    }
    // Push input values into the todo array []
    this.setState({
        todo: [...this.state.todo, this.state.value],
        value: ''
      })
    
  }

  
  render() {
    return(
      <Fragment>
      <div className="App">
      <div className="container">
      <h1 className="text--heading"> TODOList. </h1>
      <form onSubmit={this.handleSubmit}>
      <TextField 
      type="text"
      placeholder="What is your main focus today?"
      value={this.state.value}
      handleOnChange={this.handleOnChange}
      />
      { 
        // Show the button if the input value is populated 
        (this.state.value && this.state.value !== '') ? 
        <Button type="submit">
          ADD
        </Button> 
        : 
        ""
      }
      </form>
      { 
        // Display all the card component
        (this.state.todo.length !== 0) ? 
        this.state.todo.map((item, index) => 
          <Card key={index}>
            { item }  
          </Card>
        )
        :
        null
      }
      </div>
      </div>
      </Fragment>
    )
  }
}

export default App;
