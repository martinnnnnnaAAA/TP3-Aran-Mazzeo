import React from "react";
import Button from "../button/Button";
import './Cita.css';

const Cita = ({mascota = "default", duenio = "default", fecha = "default", hora = "default", sintomas = "default"}) => {
return(
    <div class="cita">
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño: <span>{duenio}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <Button type = "null" text = "Eliminar ×" clase = "button-elimnar u-full-width" /> 
  </div>
)
}


export default Cita;