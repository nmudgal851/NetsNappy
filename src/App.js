import React from "react";
import "./App.css";
import Header from "./Header";
import NetsnappyDetail from "./NetsnappyDetail";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className='App'>
      <Header />
      <NetsnappyDetail />
      <hr />
      <Skill />
      <hr />
      <Project />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
