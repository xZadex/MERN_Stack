import './App.css';
import Form from './components/Form';
import React, { useState }from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const handleDelete = (e, index) => {
    const filteredList = todos.filter((item, i) => {
      return i !== index;
    });
    setTodos(filteredList);
  }

  const handleChecked = (e, index) => {
    const updatedList = todos.map((item, i) => {
      if(i === index ){
        item.checked = !item.checked;
      }
      return item
    });
    setTodos(updatedList);
  }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <Form todo={addTodo} />

      <ul className='col-6 mt-3'>
      {
      todos.map((todo, i) => {
        let style = "";
        if(todo.checked){
          style = "lineThrough"
        }
      return (<li key={i} className="d-flex justify-content-between align-items-center mb-4">
        <span className={style}>{todo.content}</span>
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <input type="checkbox" className="form-check-input" onChange={(e) => handleChecked(e, i)} />
        <button className='btn btn-dark' onClick={(e) => handleDelete(e, i)}>Delete</button>
        </div>
      </li>)
      }
      )
      }
      </ul>

    </div>
  );
}

export default App;
