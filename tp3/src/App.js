import logo from './logo.svg';
import react from "react";
import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Cita from './components/cita/Cita';

function App(props) {
  return (
    <>
      <Titulo text="Administrador de pacientes" />
      <div class="container">
        <div class="row">
        <div class="one-half column">
          <Subtitulo text="Crear mi cita" />

          <form>
            <Input label="Nombre Mascota" type="text" name="mascota" clase="u-full-width" placeholder="Nombre Mascota" value="" />
            <Input label="Nombre Dueño" type="text" name="propietario" clase="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
            <Input label="Fecha" type="date" name="fecha" clase="u-full-width" placeholder={null} value="" />
            <Input label="hora" type="time" name="hora" clase="u-full-width" placeholder={null} value="" />
            <Input label="Sintomas" type="textarea" name="sintomas" clase="u-full-width" placeholder={null} value="" />
            <Button text="Agregar Cita" type="Submit" clase="button-primary" />
          </form>
        </div>
        <div class="one-half column">
          <Subtitulo text="Administra tus citas" />
          <Cita mascota = "Nina" duenio = "Martin" fecha = "2021-08-05" hora = "08:20" sintomas = "Le duele la pierna" />
          <Cita mascota = "Sifon" duenio = "Flecha" fecha = "2023-08-05" hora = "09:24" sintomas = "Duerme mucho" />
          <Cita mascota = "Floki" duenio = "Ari" fecha = "2023-08-05" hora = "16:15" sintomas = "No está comiendo" />

        </div>
        </div>
      </div>
    </>
  );
}

export default App;
