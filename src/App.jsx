import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [red, setRed] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX } = event;
    const redValue = Math.floor(clientX % 255);
    setRed(redValue);
  };

  return (
    <div className="App">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
