import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/PostItem';

const Main = ({posts}) => {
  return (
    <main>
      { posts.length ? 
        posts.map(post => <PostItem post={post} key={post.id} />) :
        <div >
          <p>
            There are no posts available. <br />
            Kindly add new posts <Link to='/create'>here.</Link>
          </p>
        </div>
      }
    </main>
  )
}

export default Main