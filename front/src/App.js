import { Fragment, useState } from "react";
import axios from 'axios';
import bcrypt from "bcryptjs-react";

function App() {
  const baseUrl = 'http://localhost:8888/api';
  const [data, setData] = useState([]);
  const [showHide, setShowHide] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [redirect, setRedirect] = useState(false);

  const MENSAJE_CORREO_NO_EXISTE = "El correo no existe";
  const MENSAJE_NO_COINCIDEN = "El password y la contraseña no coinciden";

  console.log(data, "redirigir: "+redirect)

  const iniciarSesion = (event) => {
    event.preventDefault();
    let pass = event.target.contraseña.value;
    let email = event.target.email.value;

    peticionGet(email, pass);
  };

  const peticionGet = async(email, pass) => {
    await axios.get(baseUrl+'?email="'+email+'"')
    .then(response => {
      if(response.data){
        bcrypt.compare(pass, response.data['password'], function(err, res) {
          if(res){
            setShowHide(false);
            setRedirect(res);
            setData(response.data);
          }
          else{
            setRedirect(err);
            setShowHide(true);
            setMensaje(MENSAJE_NO_COINCIDEN);
          }
        })
      }
      else{
        setShowHide(true);
        setMensaje(MENSAJE_CORREO_NO_EXISTE);
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Fragment>
      <form onSubmit={iniciarSesion}>
        <input type="password" id="contraseña" name="contraseña" required={true} placeholder="Contraseña" />
        <input type="email" id="email" name="email" required={true} placeholder="correo" />
        <button type='submit' >Iniciar sesion</button>
      </form>
      {showHide && 
      <>
        <h1>{mensaje}</h1>
      </>}
    </Fragment>

  );
}

export default App;
