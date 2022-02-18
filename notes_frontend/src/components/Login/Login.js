import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { sendData } from "../../utils/Utils";
import { Input } from "../Input/Input";


const viewport = {
    height: '80vh',
}

const Login=()=>{
    
    const navigate = useNavigate()
    const [wait, setWait] = useState(null)

    const [email, setEmail]=React.useState({filed: '', valid: null})
    const [password, setPassword]=React.useState({filed: '', valid: null})
    const URL='http://34.140.9.129/api/v1/login.php'


    const enviarDatos = async (e)=>{
        e.preventDefault()
        setWait(true)

        const datos={
            "email": email,
            "password": password
        }

        const login = await sendData(URL, datos)
       
        setWait(false)
        if(login.Succes===true) {
            sessionStorage.setItem('Sesion_de_usuario', JSON.stringify(login))
            navigate('/dashboard')
        }
        console.log(login)
       
    }

    return (
        <div className="tile is-justify-content-center is-align-items-center " style={viewport}>
        <form className="box">
            <Input
            setState={setEmail}
            value={email.filed}
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            />
            <Input
            setState={setPassword}
            value={password.filed}
            label="Contraseña"
            placeholder="*********"
            type="password"
            />

        <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" disabled={wait} onClick={enviarDatos}>Ingresar</button>
              </div>
              <div className="control">
                <Link to="/registro" className="button is-link is-light">Registrarme</Link>
              </div>
            </div>
        </form>       

    </div>

    )
}

export {Login}