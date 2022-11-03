import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';

function App() {
  return (
    <div className="App container d-flex align-items-center justify-content-center mt-5">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:WordOrNumber' element={<WordOrNumber/>}/>
        <Route path='/:WordOrNumber/:fontColor/:bgColor' element={<WordOrNumber/>}/>
      </Routes>
    </div>
  );
}

export default App;
