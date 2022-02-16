import React, { useState } from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { Comment } from "../Comment/Comment";


const PublicTask = ({title, content,deadline,task_id, name, profile_img,likes, user_id}) => {


    const [open, setOpen] = useState(false)
    const [like, setLike] = useState(likes)

    const addLike = () => {
        
        console.log(likes)
        const data={
            "likes": like
        }
    }


    return(
        <div className="card m-2">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
            <UserInfo
            name={name}
            user_id={user_id}
            profile_img={profile_img}
            />
          <div className="content">
              {content}
                    
          </div>
            <time >{deadline}</time>
            <p>{like}</p>
        </div>
        <div className="card-content ">      
          <button className="button is-light ml-3 mr-3 mb-3" onClick={addLike}>
              <span className="icon">
                  <i className="far fa-thumbs-up"></i>
              </span>
              <span>Me gusta</span>
          </button>
          <button className="button is-light mb-3" onClick={()=>{open? setOpen(false):setOpen(true)}}>
                  <span className="icon">
                      <i className="far fa-comment-alt"></i>
                  </span>
                  <span>Comentar</span>
            </button>  

        {!!open &&  
            <Comment    
            name={name}
            user_id={user_id}
            profile_img={profile_img}
            task_id={task_id}
            />
           
        }
        </div>

        
        </div>
    )
}

export{PublicTask}