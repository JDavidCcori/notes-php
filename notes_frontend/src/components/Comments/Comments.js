import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import './Comments.css'

const Comments = ({content,profile_img,name,user_id}) => {
    const imgServer = 'http://localhost:3000/userimg/'

    return(
        <>
          <div className="coments_box">
            <UserInfo
            name={name}
            user_id={user_id}
            profile_img={`${imgServer}${profile_img}`}
            />
            <p>{content}</p>
          </div>
        </>
    )
}

export{Comments}