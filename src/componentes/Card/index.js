import React from 'react';
import './style.css';

export default function Card(props) {
    return(
        <div className="box-card">
            <div>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <span className="empresa">{props.empresa}</span>
                <p>{props.paragrafo}</p>
            </div>
        </div>
    );
}