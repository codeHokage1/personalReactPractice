import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
  return (
    <article className='article'>
          <Link to ={`posts/${post.id}`} className='post-link'>
            <h1>{post.title}</h1>
          </Link>
          <h5>{post.datetime}</h5>
          <p>{post.body.length >= 25 ? post.body.slice(0, 25) + ' ...' : post.body}</p>
    </article>
  )
}

export default PostItem;