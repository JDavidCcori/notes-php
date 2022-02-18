import React, { useState } from "react";
import './UserProfile.css'
import {Input} from '../Input/Input'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGetUser } from "../../hooks/useGetUser";

const UserProfile = () =>{

    let likes = 5
    const userParams = useParams()
    const imgServer = 'http://34.140.9.129/userimg/'
    const updateProfileImg = "http://34.140.9.129/api/v1/updateprofile.php"
    const getUSerUrl = "http://34.140.9.129/api/v1/getuserdates.php"
	
    const [foto, setFoto] = useState(null)

    const uploadFoto = (event) => {
        setFoto(event)
    }

    const insertarFoto = async(e) =>{
        e.preventDefault();
        const fd = new FormData();
        fd.append('image', foto)
        fd.append('user_id', userParams.id)

       axios.post(updateProfileImg, fd)
       .then(res => {
           console.log(res)
       })
    }
		
	
		const userD = useGetUser(`${getUSerUrl}?user_id=${userParams.id}`)


		const [name, setName] = React.useState(userD.name)
		const [dayOfBirth, setDayOfBirth] = React.useState(userD.day_of_birth)
		const [biography, setBiography] = React.useState(userD.biography)


    return (
    <div className="container ">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="box header">
              <div className="upload">
                <div className=" " >
                  <img src={`${imgServer}${userD.profile_img}`} className="is-rounded  img_size" alt="Foto de perfil"/>
                </div>
                <form >
                  <div className="file is-primary ">
				  <label className="file-label">
				  <input name="image" className="file-input" type="file"   onChange={(event)=> uploadFoto(event.target.files[0])}/>
						<span className="file-cta">
						<span className="file-icon">
						<i className="fas fa-camera"></i>
						</span>
						</span>
											
					</label>
					<button className="button is-primary is-light" onClick={insertarFoto}>Subir foto</button>
                  </div>
                  </form>
              </div>
              <div>
				<h4 className="title is-3 m-0">{userD.name}</h4>
				<h4 className="title is-6 ">{likes}</h4>
				<figure>
				<img  alt="Foto de perfil seguidor"/>	
				</figure>				
              </div>
            </div>
			<div className="tabs is-boxed">
							
				<div>
				<article className="message is-primary">
						<div className="message-body">
								Actualiza tus datos
						</div>      		
					</article>
					<Input
					setState={setName}
					value={name}
					type="text"
					placeholder="Nombre"
					label="Nombre"
					/>
					<Input
					setState={setDayOfBirth}
					value={dayOfBirth}
					type="date"
					placeholder="Fecha de Nacimiento"
					label="Fecha de Nacimiento"
					/>
					<Input
					setState={setBiography}
					value={biography}
					type="textarea"
					placeholder="Biografía"
					label="Biografía"
					/>		
				</div>
			</div>
						
							
          </div>
        </div>
    </div>
    
    )
    
}

export {UserProfile}