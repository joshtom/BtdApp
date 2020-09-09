import React, { Component, Fragment } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    return(
      <Fragment>
         <button
         onClick={this.props.handleClick}
         className="Button--btn"
         >
             { this.props.children }
         </button>
      </Fragment>
    )
  }
}

export default Button;
