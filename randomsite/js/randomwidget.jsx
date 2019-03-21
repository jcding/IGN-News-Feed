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
    // TODO 1: initialize component state
    this.state = {latest: [],
                  article: [],
                  video: []}
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(this.props.url, {credentials: 'same-origin'})
      .then((response) => {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          latest: data.data
          
        })
      })
      
  }

  handleClick(e) {
    // TODO 4: Handle 'add word' button.  Retrieve and add word to our state.
    // useful link:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    e.preventDefault(); // Prevent button form submitting form
  }

  render() {
    // TODO 3: Render a button and a word list from the state
    // check out:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://reactjs.org/docs/lists-and-keys
    let output = [];
    
    this.state.latest.map((post) => {
      output.push(
        <div>
          {/* <p> {post.contentType} </p> */}
          <h4>{post.metadata.headline}{post.metadata.title}</h4>
          <p>{post.metadata.description}</p>
          <img src = {post.thumbnails[0].url} alt = "picture"/> 
          <hr/>
        </div>
      )
    })

    return (
      <div class = "feed">
        {output}
      </div>
    );
  }
}

RandomWidget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RandomWidget;
