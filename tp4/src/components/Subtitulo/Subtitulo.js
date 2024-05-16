import React from 'react';
import './Subtitulo.css';

const Subtitulo = ({text = "default"}) => {
    return <h2> {text} </h2>
}

export default Subtitulo