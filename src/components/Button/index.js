import React, { Component, Fragment } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    return(
      <Fragment>
         <button
         type={this.props.type}
         className="Button--btn"
         >
             { this.props.children }
         </button>
      </Fragment>
    )
  }
}

export default Button;
