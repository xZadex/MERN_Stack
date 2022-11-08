import './App.css';
import Main from './components/Main';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/hero/:id" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
