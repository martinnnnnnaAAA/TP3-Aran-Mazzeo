import React, {useState} from 'react';
import './Formulario.css';
import Input from '../input/Input';
import Button from '../button/Button';



const Formulario = ({citas = "", setCitas}) => {

    const crearCita = (e) => {
        e.preventDefault();
        if(e.target.mascota.value.length < 3){
            alert("El nombre de la mascota debe tener al menos 3 caracteres")
        }
        else if(e.target.propietario.value.length < 3){
            alert("El nombre del dueño debe tener al menos 3 caracteres")
        }
        else if(e.target.fecha.value === ""){
            alert("Debes ingresar una fecha")
        }
        else if(e.target.hora.value === ""){
            alert("Debes ingresar una hora")
        }
        else if(e.target.sintomas.value === ""){
            alert("Debes ingresar los sintomas")
        }
        else if (window.confirm("¿Seguro deseas agregar esta cita?")){
        setCitas([
            ...citas,
            {
            NombreMascota: e.target.mascota.value,
            NombreDueño: e.target.propietario.value,
            Fecha: e.target.fecha.value,
            Hora: e.target.hora.value,
            Sintomas: e.target.sintomas.value
        }])
    }

    }
return(
<>
    <form onSubmit={crearCita}>
        <div>
            <Input label="Nombre Mascota" type="text" name="mascota" clase="u-full-width" placeholder="Nombre Mascota"  />
            <Input label="Nombre Dueño" type="text" name="propietario" clase="u-full-width" placeholder="Nombre dueño de la mascota"  />
            <Input label="Fecha" type="date" name="fecha" clase="u-full-width" placeholder={null}  />
            <Input label="hora" type="time" name="hora" clase="u-full-width" placeholder={null}  />
            <Input label="Sintomas" type="textarea" name="sintomas" clase="u-full-width" placeholder={null}  />
            <Button text="Agregar Cita" type="Submit" clase="button-primary" />
        </div>
    </form>
</>
)
    
}

export default Formulario;