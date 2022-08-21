import './App.css';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Main from './pages/Main';
import About from './pages/About';
import Missing from './pages/Missing';
import NewPost from './pages/NewPost';
import SinglePost from './pages/SinglePost';
import UpdatePost from './components/UpdatePost';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts'


function App() {

  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');



  const handleDelete = async (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    try {
      await api.delete(`/posts/${id}`);
    } catch (err) {
      console.log(err.message)
    }
    setPosts(newPosts);
    navigate('/');
  } 

  const handleAdd = async (e) => {
    e.preventDefault();

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: postTitle,
      datetime: format(new Date(), 'MMMM dd, yyyy pp'),
      body: postBody
    }
    try {
      const res = await api.post('/posts', newPost);
      console.log(res.data);
    } catch (err) {
      console.log(err.message)
    }

    const newPosts = [...posts, newPost]; // or [...posts, res.data]
    setPosts(newPosts);
    setPostBody('');
    setPostTitle('');
    navigate('/');
  }

  const handleUpdate = async (id) => {
    try {
      const updatedPost = {
        id,
        title: updateTitle,
        datetime: format(new Date(), 'MMMM dd, yyyy pp'),
        body: updateBody
      }
      const res = await api.put(`/posts/${id}`, updatedPost);
      const newPosts = posts.map(post => post.id === id ? { ...res.data } : post) // {...updatedPost } or {...res.data}
      setPosts(newPosts)
      setUpdateTitle('');
      setUpdateBody('');
      navigate(`/`)
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    }

    fetchPosts();
  }, [])

  return (
    <>
        <Header />
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Main posts={posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()) )} />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<NewPost 
                                              handleAdd={handleAdd} 
                                              postTitle={postTitle} 
                                              setPostTitle={setPostTitle} 
                                              postBody={postBody} 
                                              setPostBody={setPostBody} 
                                            />} />
           <Route path='/update/:id' element={<UpdatePost 
                                              posts={posts}
                                              handleUpdate={handleUpdate} 
                                              updateTitle={updateTitle} 
                                              setUpdateTitle={setUpdateTitle} 
                                              setUpdateBody={setUpdateBody} 
                                              updateBody={updateBody} 
                                            />} />
          <Route path='/posts/:id' element={<SinglePost posts={posts} handleDelete={handleDelete} />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
