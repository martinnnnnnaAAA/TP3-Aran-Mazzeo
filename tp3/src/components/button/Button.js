import React from 'react';
import './Button.css';

const Button = ({text = "default", type = "default", clase = "null"}) => {
return(
<>
<button type={type} class={clase}>{text}</button>
</>
)
    
}

export default Button;