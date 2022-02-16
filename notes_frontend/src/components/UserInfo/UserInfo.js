import React from "react";
import { NavLink } from "react-router-dom";


const UserInfo = ({profile_img, name, user_id}) => {
    return(
        <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={profile_img} alt="Foto de perfil"/>
            </figure>
          </div>
          <div className="media-content">
            <NavLink className="title is-4" to={`/profile/${user_id}/${name}`}>{name}</NavLink>
          </div>
        </div>
        </div>
    )
}

export{UserInfo}