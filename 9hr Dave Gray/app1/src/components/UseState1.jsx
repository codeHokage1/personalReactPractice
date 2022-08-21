import React from 'react'
import { useState, useRef} from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

export const Counter = () => {
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


export const ToDo = ({heading, todos, handleCheck, handleDelete}) => {

  

  return (
    <div>
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

// ################################

export const AddItem = ({ newTodo, setNewTodo, handleAdd }) => {
  const inputRef = useRef(); 
  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} ref={inputRef} required />
      <button onClick={() => inputRef.current.focus()}><FaPlus /></button>
    </form>
  )
}

// ################################

export const SearchTodo = ({search, setSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={search} placeholder='Search for a task...' onChange={e => setSearch(e.target.value)} />
    </form>
  )
}
