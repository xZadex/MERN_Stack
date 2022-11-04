import React, { useState } from "react";
import Tabs from "./components/Tabs";
import './App.css'

function App() {

  const tabsList = [
    {content: 'Table 1 Content'},
    {content: 'Table 2 Content'},
    {content: 'Table 3 Content'},
    {content: 'Table 4 Content'}
  ]

  const [tabs] = useState(tabsList);

  const [current, setCurrent] = useState(tabs[0])

  return (
    <div className="App">
      <Tabs tabs={tabs} current={current} setCurrent={setCurrent}/>
    </div>
  );
}

export default App;