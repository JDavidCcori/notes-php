import React, { useEffect, useState } from "react";
import './UserProfile.css'
import { useGetUser } from "../../hooks/useGetUser";
import { useParams } from "react-router-dom";
import { fechaActual, sendData } from "../../utils/Utils";
import { Avatar } from "./Avatar";


const PublicProfile = () =>{

    const userParams = useParams()
    const session = JSON.parse(sessionStorage.getItem('Sesion_de_usuario'))
    const imgServer = 'http://34.140.9.129/userimg/'
    const getUSerUrl = "http://34.140.9.129/api/v1/getuserdates.php"
    const addFollowUrl = "http://34.140.9.129/api/v1/addfollow.php"


    const [followers, setFollowers] = useState([])

    const getFollowUrl = "http://34.140.9.129/api/v1/getfollowers.php"

    const now = fechaActual()

	  const userD = useGetUser(`${getUSerUrl}?user_id=${userParams.id}`)

    const handleFllow = async () => {
      const data = {
        'receptor_id': userParams.id,
        'sender_id': session.user_id,
        'created_at': now
      }
      const addFollower = await sendData(addFollowUrl,data)
      console.log(addFollower)
    }

    useEffect(()=> {
      fetch(`${getFollowUrl}?receptor_id=${userParams.id}`)
      .then(response => response.json())
      .then(data => {
        setFollowers(data.items)
      })
    },[])
   

    return (
    <div className="container ">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="box header">
              <div className="upload">
                <div className=" " >
                  <img src={`${imgServer}${userD.profile_img}`} className="is-rounded  img_size" alt="Foto de perfil"/>
                </div>
               
              </div>
              <div>
              <h4 className="title is-3 m-0">{userD.name}</h4>
              <h4 className="title is-6 m-1">Seguidores: {followers.length}</h4>
              <div className="is-flex is-align-items-center mb-2">
                {
                  followers.map((item) => (
                  <Avatar key={item.id} {...item}>
                    <figure className="image image is-48x48">
                      <img className="is-rounded"  alt="Foto de perfil seguidor" src={`${imgServer}${item.profile_img}`}/>	
                    </figure>	
                  </Avatar>
                  ))
                }
              </div>
              <div>
                <button class="button is-link is-light is-small" onClick={handleFllow}>Seguir</button>
              </div>			
              </div>
            </div>		
          </div>
        </div>
    </div>
    
    )
    
}

export {PublicProfile}