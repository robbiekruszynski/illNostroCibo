import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import NavBar from "./Nav";
import Grid from "./Grid";
import img from "./consensys.png";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Grid />
    </div>
  );
}

export default App;
