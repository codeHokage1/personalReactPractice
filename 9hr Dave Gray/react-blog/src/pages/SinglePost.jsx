import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePost = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => id === String(post.id))

  return (
    <section className='single-post'>
      {
        post ? 
          <>
            <h1>{post.title}</h1>
            <h5>{post.datetime}</h5>
            <p>{post.body}</p>

            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            <p>Click here to <Link to={`/update/${post.id}`}>edit this post.</Link></p>
          </> : <p>Sorry. This post doesn't exist. <br />Kindly check the <Link to='/'>homepage</Link> for available posts.</p>
      }
    </section>
  )
}

export default SinglePost