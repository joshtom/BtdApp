import React, { Component, Fragment } from 'react';
import TextField from './components/TextField';
// import Card from './components/Card';
import Button from './components/Button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      TODO: [],
      value: '',
      show: false
     }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    })
    // this.setState({
    //   show: true
    // })
  }

  
  render() {
    return(
      <Fragment>
      <div className="App">
      <h1 className="text--heading"> TODOList. </h1>
      <TextField 
      type="text"
      placeholder="What is your main focus today?"
      handleOnChange={this.handleOnChange}
      />
      { 
        // Show the button if the value is occupied
        (this.state.value) ? 
        <Button>
          ADD
        </Button>
        : 
        ""
      }
      {/* <Card /> */}
      </div>
      </Fragment>
    )
  }
}

export default App;
