import React, {useState} from "react";
import Form from "./components/Form";
import Box from "./components/Box";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxDetails, setBoxDetails] = useState({
    color:"",
    size: "",
  })

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form 
      boxDetails={boxDetails}
      setBoxDetails={setBoxDetails}
      boxes={boxes}
      setBoxes={setBoxes}
      />
      <div className="container">
        {boxes.map(box => <Box color={box.color} size={box.size}/>)}
      </div>
    </div>
  )
}

export default App;
