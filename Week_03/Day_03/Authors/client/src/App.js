import './App.css';
import {useState} from 'react'
import {Routes,Route} from "react-router-dom";
import axios from 'axios'
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  const [authors, setAuthors] = useState([])

  const removeAuthor = id => {
    setAuthors(authors.filter(author => author._id !== id));
}

const deleteItem = (id) => {
    axios.delete('http://localhost:8000/api/author/delete/' + id)
        .then(res => {
            removeAuthor(id)
        })
        .catch(err => console.error(err));
}

  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Main authors={authors} setAuthors={setAuthors} deleteItem={deleteItem}/>}/>
        <Route path='/new' element={<AddAuthor authors={authors} setAuthors={setAuthors}/>}/>
        <Route path='/edit/:id' element={<EditAuthor authors={authors} setAuthors={setAuthors}/>}/>
      </Routes>
    </div>
  );
}

export default App;
