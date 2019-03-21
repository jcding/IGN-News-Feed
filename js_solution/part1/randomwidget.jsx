import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class RandomWidget extends React.Component {
  /* 
  Display a list of random words and a button to generate new random words. 
  */

  constructor(props) {
    // Initialize immutable properties and mutable state
    super(props);
    this.state = { words: [] };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Call REST API to get a random word
    fetch(this.props.url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log(data.random_word);
        this.setState({
          words: [data.random_word, ]
        });
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  handleClick(e) {
    // Handle 'add word' button.  Add a word to the list.
    e.preventDefault();
    fetch(this.props.url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState(prevState => ({
          words: prevState.words.concat([data.random_word, ])
        }));
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  render() {
    // Render button and word list
    return (
      <div className="randomwords">
        <button onClick={this.handleClick}>
          Add Word
        </button>

        <ul>
        {this.state.words.map((word) => <li>{word}</li>)}
        </ul>
      </div>
    );
  }
}

RandomWidget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RandomWidget;
