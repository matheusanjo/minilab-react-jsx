import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Emotion from "./EmotionMeter";
import Greeting from "./Greeting";
import Profile from "./Profile";
import ToDoList from "./ToDoList";


// Não se esqueça de importar os componentes!

const name = "Matheus";
const task = ["Fazer compras", "Renovar CNH", "Pagar contas", "Estudar React", "Fazer Minilab"];

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">

      {Greeting()}
      {Profile()}
      {ToDoList()}
      {Emotion()}
      
    </div>
  );
}

export default App;
