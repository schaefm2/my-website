import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import MyCanvas from "./MyCanvas";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main-content">
        <MyCanvas />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
