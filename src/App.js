import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Cards";
import NavBar from "./Nav";
function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavBar />
      </div>
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
