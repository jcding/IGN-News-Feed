import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class RandomPannel extends React.Component {
  /*
  Display two random widgets and a random message
  */

  constructor(props) {
    // Initialize immutable properties and mutable state
    super(props);
    // TODO 1: initialize component state

  }

  componentDidMount() {
    // TODO 2: Call REST API to get a random message and update state
    // check out:
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  }


  render() {
    // TODO 3: Render two random widgets and the random message from the state
    return (
      <p>IMPLEMENT ME</p>
    );
  }
}

RandomWidget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RandomPannel;
