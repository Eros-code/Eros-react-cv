import React from "react";
import "./App.css";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Skills from "../components/Skills";

export default function App() {
  return (
    <div className="content-container">
      <Intro />
      <div className="page-container">
        <Main />
        <Skills />
      </div>
    </div>
  );
}
