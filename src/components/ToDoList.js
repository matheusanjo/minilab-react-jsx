import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
];

function ToDoList() {

    return (
        <div className="container mt-5 mb-5 col-6">
            <small>Renderização de listas</small>
            <hr />
            <div>
                {tasks.map((task) => {
                    return <div className="border rounded">
                        <input className="m-1" type="checkbox" id="task"/>
                        <label className="my-2" for="scales">{task}</label>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ToDoList;