import React from "react";
import { UserInfo } from "../UserInfo/UserInfo";


const Comments = ({content,profile_img,name,user_id}) => {
    return(
        <>
            <article className="message is-primary">
                     
                <div className="message-body">
                      <UserInfo
                     name={name}
                     user_id={user_id}
                     profile_img={profile_img}

                      />
                      <p>{content}</p>
                </div>
            </article>
        </>
    )
}

export{Comments}