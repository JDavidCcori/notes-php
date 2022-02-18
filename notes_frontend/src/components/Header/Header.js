import React from "react";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../UserInfo/UserInfo";
import './Header.css'

const position = {
  marginLeft: '5.5rem'
}

function Header({name, img, id}) {
  const navigate = useNavigate()
  const imgServer = 'http://34.140.9.129/userimg/'

  function cerrarSession() {

    sessionStorage.removeItem('Sesion_de_usuario');
    navigate('/login')
  }

    return(
      <nav className="navbar is-light navbar is-fixed-top">
         <div className="navbar-brand" style={position}>
          <UserInfo
            name={name}
            profile_img={`${imgServer}${img}`}
            user_id={id}
          />
          <button className="button mt-1 ml-3" onClick={cerrarSession}>Cerrar session</button>
        </div>
      </nav>
    )
}

export {Header}