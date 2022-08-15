import React from 'react'

export default function TodoItem(props) {

  const deleteTodo = (e) => {
    let todos = localStorage.getItem('todos');
    let todosObj = [];
    if (todos == null) {
      todosObj = [];
    } else {
      if (window.confirm("Are you sure, you want to delete this todo ?")){
        todosObj = JSON.parse(todos);
        todosObj.splice(e.target.id, 1);
        localStorage.setItem("todos", JSON.stringify(todosObj));
        props.getTodos();
      }
    }
  }

  return (
    <tr>
        <td>{props.sno}</td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.timestamp}</td>
        <td>
            <button className="btn btn-sm btn-danger" id={props.todoIndex} onClick={deleteTodo}>Delete</button>
        </td>
    </tr>
  )
}
