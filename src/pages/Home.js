import React, {useState, useEffect} from 'react'
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = () => {
    let todos = localStorage.getItem('todos');
    let todosObj = [];
    if (todos == null){
      todosObj = [];
    }else{
      todosObj = JSON.parse(todos);
      setTodos(todosObj);
    }
  }
  
  return (
    <div className="container my-3">
      <h2>Add your todo</h2>
      <AddTodo getTodos={getTodos}/>
      <hr />
      <h2>Your personal todos</h2>
      {todos.length !== 0?<table className="table table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index)=>{
            return <TodoItem key={index} sno={index+1} title={todo.title} description={todo.description} timestamp={todo.timestamp} todoIndex={index} getTodos={getTodos}/>
          })}
        </tbody>
      </table>:<p>No todos found. Please add your first todo.</p>}
    </div>
  )
}
