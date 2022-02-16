import React, { useEffect, useState } from "react";
import './UserProfile.css'
import {Input} from '../Input/Input'
import { useParams } from "react-router-dom";
import { sendData } from "../../utils/Utils";
import axios from "axios";

const UserProfile = () =>{
    const imgServer = 'http://localhost:3000/userimg/'
    const name = useParams()
    const updateProfileImg = "http://localhost:3000/api/v1/updateprofile.php"
    const getUSerUrl = "http://localhost:3000/api/v1/getuserdates.php"
    const [foto, setFoto] = useState(null)
    const [userDates, setUserDates] = useState([])
    const uploadFoto = (event) => {
        setFoto(event)
    }

    const insertarFoto = async(e) =>{
        e.preventDefault();
        console.log(foto.name)
        const fd = new FormData();
        fd.append('image', foto)
        fd.append('user_id', name.id)

       axios.post(updateProfileImg, fd)
       .then(res => {
           console.log(res)
       })
    }

    useEffect(() => {
        axios.get(`${getUSerUrl}?user_id=${name.id}`)
        .then(res => {
            setUserDates(res.data.items[0])
            console.log(res.data.items[0].profile_img)
        })
    },[])

    return (
    <div className="container">
        <div className="columns">
          <div className="column">
          <div className="box header">
              <div>
                  <figure className="image is-128x128">
                      <img src={`${imgServer}${userDates.profile_img}`} alt="Foto de perfil"/>
                  </figure>
                  <form >
                    <div className="file is-small ">
                    <label className="file-label">
                        <input name="image" className="file-input" type="file"   onChange={(event)=> uploadFoto(event.target.files[0])}/>
                        <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-camera"></i>
                        </span>
                        </span>
                    </label>
                    <button onClick={insertarFoto}>Subir foto</button>
                    </div>

                  </form>
              </div>
              <div>
                    <figure>
                        <h4 className="title is-2">Name</h4>
                        <h4 className="title is-6">12 segidore</h4>
                        <figure>
                        <img  alt="Foto de perfil seguidor"/>
                        </figure>
                    </figure>
                  </div>
            </div>
          </div>
        </div>
    </div>
    )
    
}

export {UserProfile}