import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
