import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

function App({ name, age }) {
  return    <div>
              Hello from App.JS, My name is {name} & Age = {age},  but feeling = {age - 10 } :) 
              <br/>
              <Hello firstName = {name} > </Hello>
            </div>
  
}


export default App;
