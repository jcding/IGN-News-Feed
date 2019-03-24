import InfiniteScroll from 'react-simple-infinite-scroll';
import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class Widget extends React.Component {
  /* 
  Display a list of random words and a button to generate new random words. 
  */

  constructor(props) {
    // Initialize immutable properties and mutable state
    super(props);
    // TODO 1: initialize component state
    this.state = {latest: [],
                  article: [],
                  video: [],
                  hasMore: true,
                  current_startIndex: 20}
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
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
    // useful link:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    e.preventDefault(); // Prevent button form submitting form
  }


  fetchMoreData() {
    if (this.state.current_startIndex >= 300) {
      // load the remaining posts
      // insert code here

      // then set the hasMore to false
      this.setState({
        hasMore: false
      });
      return;
    }
    
    let fetch_url = '/content/?startIndex=' + this.state.current_startIndex + '&count=20';
    
    let temp = this.state.current_startIndex + 20;
    this.setState({
      current_startIndex: temp
    });
    fetch(fetch_url)
      .then(res => res.json())
      .then( (result) => {

      })

    let url = this.state.next;
    fetch(url, { credentials: 'same-origin' })
      // error check
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((next_posts) => {
        // let combined_array = this.state.posts;
        // let next_20_posts = next_posts.data;
        // for(let i = 0; i < next_20_posts.length; i += 1){
        //   let temp_post = next_20_posts[i];
        //   combined_array.push(temp_post);
        // }
        // this.setState({posts: combined_array, next: next_posts.next})
        // history.replaceState(this.state, '','');

        console.log(next_posts)
        this.setState({
          latest: this.state.latest.append(next_posts.data)
        })
        console.log(this.state.latest)

      });
  }


  render() {
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
          <img class = "post_pic" src = {post.thumbnails[0].url} alt = "picture"/> 
          <hr/>
        </div>
      )
    })

    return (

      <div>
        <div>
          <button class="btn btn-danger" type="button">Latest</button>

          <button class="btn btn-danger" type="button">Articles</button>

          <button class="btn btn-danger" type="button">Videos</button>
        </div>



        <div class="feed">

        

          {output}
        </div>

      </div>
    );
  }
}

Widget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Widget;
