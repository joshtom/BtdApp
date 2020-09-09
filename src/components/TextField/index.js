import React, { Component, Fragment } from 'react';
import './styles.css';

class TextField extends Component {
  render() {
    return(
      <Fragment>
         <input 
         type={this.props.type}
         onChange={this.props.handleOnChange}
         placeholder={this.props.placeholder}
         className="text_field--input"
         value={this.props.value}
         />
      </Fragment>
    )
  }
}

export default TextField;
