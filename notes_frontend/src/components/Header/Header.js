import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import './Header.css'

const position = {
  marginLeft: '5.5rem'
}

function Header({name, img, id}) {

  const imgServer = 'http://34.140.9.129/userimg/'


    return(
      <nav className="navbar is-light navbar is-fixed-top">
         <div className="navbar-brand" style={position}>
          <UserInfo
            name={name}
            profile_img={`${imgServer}${img}`}
            user_id={id}
          />
        </div>
      </nav>
    )
}

export {Header}