import React from 'react'

const TodoItem = (props) => {
  return (
      <div>
      <input type="checkbox" checked={props.isComplete} /> <span>{props.task}</span>
        <hr />
      </div>
  )
}

export default TodoItem