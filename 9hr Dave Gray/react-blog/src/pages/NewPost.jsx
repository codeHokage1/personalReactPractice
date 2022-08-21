import React from 'react'

const NewPost = ({handleAdd, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className='add-post'>
      <h2>Add A New Post</h2>
      <form onSubmit={handleAdd}>
        <label htmlFor='postTitle'>Title</label><br />
        <input type="text" id='postTitle' placeholder="Enter post title" value={postTitle} required onChange={e => setPostTitle(e.target.value)} /><br />
        <label htmlFor='postBody'>Body</label> <br />
        <textarea id='postBody' placeholder="Enter post body" value={postBody} required onChange={e => setPostBody(e.target.value)} /> <br />
        <input type='submit' value='Add Post' />
      </form>
    </main>

  )
}

export default NewPost