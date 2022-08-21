import React, { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom'

const UpdatePost = ({ posts, handleUpdate, updateTitle, updateBody, setUpdateTitle, setUpdateBody }) => {
    const { id } = useParams();
    const post = posts.find(post => String(post.id) === id);

    useEffect(() => {
        if (post) {
            setUpdateTitle(post.title);
            setUpdateBody(post.body);
        }

    }, [post, setUpdateTitle, setUpdateBody])


    return (
        <main className='add-post'>
            <h2>Update {post.title}</h2>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor='postTitle'>Title</label><br />
                <input type="text" id='postTitle' placeholder="Enter post title" value={updateTitle} required onChange={e => setUpdateTitle(e.target.value)} /><br />
                <label htmlFor='postBody'>Body</label> <br />
                <textarea id='postBody' placeholder="Enter post body" value={updateBody} required onChange={e => setUpdateBody(e.target.value)} /> <br />
                <button type='submit' onClick={() => handleUpdate(post.id)}>Update Post</button>
            </form>
        </main>
    )
}

export default UpdatePost;