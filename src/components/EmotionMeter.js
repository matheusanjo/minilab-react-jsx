import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

let isTrue = true;
function Emotion() {

    return (
        <div className="container mt-5 mb-5 col-6">
            <small>Renderização condicional</small>
            <hr />
            <div>
                <i className={isTrue ? "fas fa-smile-beam" : "fas fa-frown"}></i>
            </div>
        </div>
    );
}

export default Emotion;