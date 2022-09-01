import React from "react";
import './Donacion.css';
import file from './donationMessage' ;

function Gracias(){
    let query = new URLSearchParams(window.location.search);
    let name = query.get('name');
    
    return (
        <div className="container">
            <div className="thanks-container">
                <h2>{ file.thanks.first } <span className="name">{ name } </span>{ file.thanks.final }</h2>
                <p id="emoji">{ file.thanks.emoji }</p>
                <p id="text">{ file.thanks.message }</p>
            </div>
        </div>
    )
}

export default Gracias;