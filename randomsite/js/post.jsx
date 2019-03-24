import React from 'react'


export default function Post({post}){
    return <div>
    <h4>{post.metadata.headline}{post.metadata.title}</h4>
    <p>{post.metadata.description}</p>
    <img class = "post_pic" src = {post.thumbnails[0].url} alt = "picture"/> 
    <hr/>
  </div>
}