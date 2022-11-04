import './App.css';
import { Routes, Route} from "react-router-dom";
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home'
import ErrorPage from './components/ErrorPage';
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

  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
      <h1 className='mt-5 mb-5 text-light'>Luke APIwalker</h1>
      <Form content={content} setContent={setContent}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/errorpage' element={<ErrorPage/>}/>
        <Route path='/people/' element={<ErrorPage/>}/>
        <Route path='/planets/' element={<ErrorPage/>}/>
        <Route path="/people/:id" element={<People content={content} setContent={setContent} />} />
        <Route path="/planets/:id" element={<Planets content={content} setContent={setContent}/>} />
      </Routes>
    </div>
  );
}

export default App;
