import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Cita from './components/cita/Cita';
import Formulario from './components/Formulario/Formulario';
import Listado from './components/Listado/Listado';

function App(props) {
const [citas, setCitas] = useState([])
  return (
    <>
      <Titulo text="Administrador de pacientes" />
      <div class="container">
        <div class="row">
        <div class="one-half column">
          <Subtitulo text="Crear mi cita" />
          <Formulario citas = {citas} setCitas={setCitas}></Formulario>
        </div>
        <div class="one-half column">
          <Subtitulo text="Administra tus citas" />
          <Listado citas = {citas} setCitas={setCitas}></Listado>
          

        </div>
        </div>
      </div>
    </>
  );
}

export default App;

//TENEMPS QUE ESCRIBIR EL ARRAY CITAS