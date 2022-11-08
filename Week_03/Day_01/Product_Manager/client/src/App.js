import Home from './views/Home';
import ShowProduct from './components/ShowProduct';
import {Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App container d-flex justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ShowProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
