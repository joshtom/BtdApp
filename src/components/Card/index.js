import React, { Component, Fragment } from 'react';
import './styles.css';

class Card extends Component {
  render() {
    return(
      <Fragment>
        <li className="card--children"> { this.props.children } </li>
      </Fragment>
    )
  }
}

export default Card;
