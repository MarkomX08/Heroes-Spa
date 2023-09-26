import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  //Hook de navegacion
  const navigate = useNavigate();

  //funcion para el logeo
  const onLogin = () =>{
    const lastPath = localStorage.getItem('lastPath')|| '/';
    login( 'Marco González' );
    navigate( lastPath ,{
      replace: true // propiedad para evitar el retorno de la navegacion hacia la pagina de login
    });
  }

  return ( 
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
      className="btn btn-primary"
      onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
