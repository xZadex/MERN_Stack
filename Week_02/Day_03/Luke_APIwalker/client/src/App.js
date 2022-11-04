import './App.css';
import { Routes, Route} from "react-router-dom";
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home'
import {useState} from 'react'


function App() {
  const [content, setContent] = useState({
    name:null,
    height:null,
    mass:null,
    hairColor:null,
    skinColor:null,
    climate:null,
    terrain:null,
    surfaceWater:null,
    population:null
})
  const [current, setCurrent] = useState({
    current:"planets",
    id:"1"
  })

  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
      <h1 className='mt-5 mb-5 text-light'>Luke APIwalker</h1>
      <Form content={content} setContent={setContent} current={current} setCurrent={setCurrent}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/people/:number" element={<People content={content} setContent={setContent} current={current} setCurrent={setCurrent}/>} />
        <Route path="/planets/:number" element={<Planets content={content} setContent={setContent} current={current} setCurrent={setCurrent}/>} />
      </Routes>
    </div>
  );
}

export default App;
