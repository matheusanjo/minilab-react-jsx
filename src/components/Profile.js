import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/puppy.jpg";


function Profile() {

    return (
        <div className="container mt-5 mb-5 col-6">
            <small>Imagens</small>
            <hr />
            <div className="border rounded w-75">
                <img src={img} className="rounded w-100" />
                <h5 className="font-weight-bold mx-3"><b>Cute puppy</b></h5>
                <p className="mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tristique ligula, ac consequat neque. Praesent a placerat purus. Suspendisse ut lorem eu eros commodo porta.</p>
            </div>
        </div>
    );
}

export default Profile;