import './App.css';
import { ToDo, AddItem, SearchTodo } from './components/UseState1';
import {useEffect, useState} from 'react'
// import UseStateProject from './components/UseStateProject';

import apiRequests from './components/apiRequests';
import USeEffectProject from './components/USeEffectProject';

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, value: "Go to work", isDone: true },
  //   { id: 2, value: "Work at work", isDone: true },
  //   { id: 3, value: "Close from work", isDone: false },
  //   { id: 4, value: "Eat and Sleep after work", isDone: false }
  // ]);

  // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Current Tasks')) || []); // to get the list from the local storage
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'http://localhost:3500/todo';


  const handleAdd = async (e) => {
    e.preventDefault();
    // console.log(newTodo);
    const newItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      value: newTodo,
      isDone: false
    }
    console.log(newItem);
    const newList = [...todos, newItem];
    setTodos(newList);
    // localStorage.setItem('Current Tasks', JSON.stringify(newList));
    setNewTodo('');

    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }

    const request = await apiRequests(API_URL, postOptions);
    if (request) console.log(request);
  }



  const handleCheck = async (id) => {
    // console.log("This task has an id of: ", id);
    const newList  = todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone} : todo)
    setTodos(newList);
    // localStorage.setItem('Current Tasks', JSON.stringify(newList));

    const toUpdate = newList.filter(todo => todo.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isDone: toUpdate[0].isDone })
    }

    const updateURL = `${API_URL}/${id}`;
    const request = await apiRequests(updateURL, updateOptions);
    if (request) console.log(request);
  }



  const handleDelete = async (id) => {
    const newList2 = todos.filter(todo => todo.id !== id)
    setTodos(newList2);
    // localStorage.setItem('Current Tasks', JSON.stringify(newList2));

    // const toDelete = todos.filter(todo => todo.id === id);

    const deleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify(toDelete[0])
    }

    const deleteURL = `${API_URL}/${id}`;
    const response = await apiRequests(deleteURL, deleteOptions);
    if(response) console.log(response);
  }


  const fetchTodo = async () => {
    try {
      const response = await fetch(API_URL);
      const todosList = await response.json();
      setTodos(todosList);
      // console.log(todosList)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(!isLoading);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchTodo();
    }, 2000);
  }, [])






  // ##############################################################
  // FETCH API with useEffect() Challenge
  // ##############################################################


  // const [items, setItems] = useState([]);

  // const API_URL2 = 'https://jsonplaceholder.typicode.com';

  // const fetchItems = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const gottenItems = await response.json();
  //     setItems(gottenItems);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchItems()
  // }, [])



  return (

    // <div>
    //   <USeEffectProject/>
    // </div>







    
    
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddItem newTodo={newTodo} setNewTodo={setNewTodo} handleAdd={handleAdd} />
      <SearchTodo search={search} setSearch={setSearch} />
      {
        isLoading ? <p>Loading Items ...</p> : <ToDo heading="Hello App" todos={todos.filter(todo => (todo.value).toLowerCase().includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
      }

      {/* <UseStateProject /> */} 
    </div>
  );
}

export default App;
