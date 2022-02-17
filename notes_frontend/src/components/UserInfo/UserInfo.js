import React from "react";
import { NavLink } from "react-router-dom";
import './UserInfo.css'


const UserInfo = ({profile_img, name, user_id}) => {

  const session = JSON.parse(sessionStorage.getItem('Sesion_de_usuario'))

  let ruta = ''
  if (session.user_id === user_id) {
    ruta = '/userprofile/'
  }else{
    ruta = '/profile/'
  }

    return(

        <div className="media is-flex is-align-items-center boxComment" >
          <div className="media-left">
            <NavLink to={`${ruta}${user_id}/${name}`}>
              <img className="avatar" src={profile_img} alt="Foto de perfil"/>
            </NavLink>  
           
          </div>
          <div className="media-content">
            <NavLink className="title is-4" to={`${ruta}${user_id}/${name}`}>{name}</NavLink>
          </div>
        </div>

    )
}

export{UserInfo}