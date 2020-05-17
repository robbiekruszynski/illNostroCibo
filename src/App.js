import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import NavBar from "./Nav";
import Grid from "./Grid";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="centered"></div>
      <div className="cards">
        {/* <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
        <div></div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
