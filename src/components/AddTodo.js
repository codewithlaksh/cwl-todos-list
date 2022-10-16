import React, { useState } from 'react'

export default function AddTodo(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  }

  const addTodo = () => {
    if (document.getElementById("title").value !== "" && document.getElementById("description").value !== "") {
      const formData = {
        title: title,
        description: description,
        timestamp: new Date().toLocaleString()
      }
      let todos = localStorage.getItem('react-todos-app');
      let todosObj = [];
      if (todos == null) {
        todosObj.push(formData);
        localStorage.setItem("react-todos-app", JSON.stringify(todosObj));
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        props.getTodos();
        props.showAlert("Your todo has been added successfully!", "success");
      } else {
        todosObj = JSON.parse(todos);
        todosObj.push(formData);
        localStorage.setItem("react-todos-app", JSON.stringify(todosObj));
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        props.getTodos();
        props.showAlert("Your todo has been added successfully!", "success");
      }
    }else{
      props.showAlert("Please fill up your todo details!", "error");
    }
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="title">Todo title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Enter your todo title" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Todo description</label>
          <textarea type="text" className="form-control" id="description" name="description" rows={4} placeholder="Enter your todo description" onChange={handleChange} />
        </div>
      </form>
      <button type="button" className="btn btn-sm btn-danger" onClick={addTodo}>Add todo</button>
    </>
  )
}
