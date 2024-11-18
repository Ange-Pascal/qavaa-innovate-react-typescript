import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";

function App() {

  const [count, setCount] = useState(0)
  function handlClick(){
      setCount(count + 1)
  }
  return (
    <div>
      <Header count={count} onClick= {handlClick} />
      <Header count={count} onClick= {handlClick} />
      <Header count={count} onClick= {handlClick} />
    </div>
  );
}

export default App;
