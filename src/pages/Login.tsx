import { useState, SubmitEvent } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [usuario, setUsuario] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const enviaFormulario = (evento: SubmitEvent<HTMLFormElement>) => {
    evento.preventDefault();    // Sirve para que no recarge la página por completo cuando hace el submit
    console.log('Intento de login:', usuario, password);
    // Aquí habrá que conectar más adelante con el backend / sistema Cl@ve

    navigate('/usuarios');
  };
  
  return (
    <div className="login-container">

      <h2>Iniciar sesión</h2>

      <form onSubmit={enviaFormulario}>
          <div>
            <label htmlFor="usuario">Usuario</label>
            <input 
              id="usuario"
              type="text"
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
      </form>
      
    </div>
  )
}

export default Login