import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const name = "Matheus";

function Greeting() {

    return (
        <div className="container mt-5 mb-5 col-6">
            <small>Interpolação de variáveis</small>
            <h1 className="font-weight-bold">Olá, {name}! </h1>
        </div>
    );
}

export default Greeting;