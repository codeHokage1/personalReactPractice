import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
      <div>
          <h1>Counter</h1>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// ################################

export const Greet = () => {

  const generateRandom = () => {
    const names = ['Bola', 'Ayo', 'Ibrahim', 'Mustapha'];
    return names[Math.floor(Math.random() * names.length)];
  }
  const [name, setName] = useState(generateRandom);

  return (
    <div>
      <h1>Hello there, {name}!</h1>
      <button onClick={() => setName(generateRandom)}>Click to change name</button>
    </div>    
  )
}

// ################################


export const ToDo = (props) => {

  const [todos, setTodos] = useState([
    { id: 1, value: "Go to work", isDone: true },
    { id: 2, value: "Work at work", isDone: true },
    { id: 3, value: "Close from work", isDone: false },
    { id: 4, value: "Eat and Sleep after work", isDone: false }
  ]);

  const handleCheck = (id) => {
    console.log("This task has an id of: ", id);
    const newList  = todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone} : todo)
    setTodos(newList);
    localStorage.setItem('Current Tasks', JSON.stringify(newList));
  }

  const handleDelete = (id) => {
    const newList2 = todos.filter(todo => todo.id !== id)
    setTodos(newList2);
    localStorage.setItem('Current Tasks', JSON.stringify(newList2));
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      {
      todos.length ? (
        <div>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.isDone} onChange={() => handleCheck(todo.id)} />
              <label style={todo.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{todo.value}</label>
              <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(todo.id)} />
            </li>
          ))
        }
      </ul>
    </div> 
      ) : (
          <p>Your Todolist is empty</p>
      )
    }   
    </div>
  )
}

ToDo.defaultProps = {
  heading: "Hello World: The default Prop"
}

export default Counter