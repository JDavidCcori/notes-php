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

    const [email, setEmail]=React.useState('')
    const [password, setPassword]=React.useState({filed: '', valid: null})
    const URL='http://34.140.9.129/api/v1/login.php'

    const [error, setError] = useState(null)

    const enviarDatos = async (e)=>{
        e.preventDefault()
        setWait(true)
        const datos={
            "email": email,
            "password": password
        }
        if (email === '' || password === '') {
            setError('Los campos no pueden estar vacíos')

        }   
        const login = await sendData(URL, datos)
        
        setError(login.error)
        setWait(false)
        if(login.Succes===true) {
            sessionStorage.setItem('Sesion_de_usuario', JSON.stringify(login))
            navigate('/dashboard')
        }
    }

    return (
        <div className="tile is-justify-content-center is-align-items-center " style={viewport}>
        <form className="box">
        <h3 className="title is-3">Login</h3>
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
            {
                error && 
                <div className="notification is-danger">
                {error}
                </div>
            }

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