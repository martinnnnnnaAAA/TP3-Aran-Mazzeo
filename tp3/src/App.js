import logo from './logo.svg';
import react from "react";
import './App.css';

function App(props) {
  return (
    <form>
      <Input label = "Nombre Mascota" type = "text" name = "mascota" clase = "u-full-width" placeholder = "Nombre Mascota" value = ""/>
      <Input label = "Nombre dueño de la mascota" type = "text" name = "propietario" clase = "u-full-width" placeholder = "Nombre dueño de la mascota" value = ""/>
      <Input label = "Fecha" type = "date" name = "fecha" clase = "u-full-width" placeholder = {null} value = ""/>
      <Input label = "Hora" type = "time" name = "hora" clase = "u-full-width" placeholder = {null} value = ""/>
      <Input label = "Sintomas" type = "textarea" name = "sintomas" clase = "u-full-width" placeholder = {null} value = ""/>

    </form>
  );
}

export default App;
