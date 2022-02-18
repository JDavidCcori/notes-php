import React from "react";
import { Input } from "../Input/Input";
import { sendData} from "../../utils/Utils";
import { NavLink } from "react-router-dom";

const viewport = {
    height: '80vh',
}

const Registro = () => {

    const [name, setName] = React.useState({filed: '', valid: null})
    const [email, setEmail] = React.useState({filed: '', valid: null})
    const [password, setPassword] = React.useState({filed: '', valid: null})
    const [password2, setPassword2] = React.useState({filed: '', valid: null})
    const [registro, setRegistro] = React.useState(null)
    const URL="http://34.140.9.129/api/v1/user-register.php"


    const enviarDatos = async (e) => {
        e.preventDefault()
        const datos={
            'email': email, 
            'name': name,
            'password':password
        }
        const php= await sendData(URL,datos)
        setRegistro(php)
    }
    let bo = true
    { (password != password2) ? bo=true : bo=false}
    return (
        <div className="tile is-justify-content-center is-align-items-center " style={viewport}>
            <form className="box">
                <Input 
                setState={setName}
                value={name.filed}
                label="Nombre"
                placeholder="Jose ..."
                type="text"

                />
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
                <Input
                setState={setPassword2}
                value={password2.filed}
                label="Repite tu contraseña"
                placeholder="*********"
                type="password"
                />
                
                {
                    bo && 
                      <div className="notification is-danger">
                          las contraseñas no coinciden
                      </div>
                }
                <div>
                    <button className="button is-primary mr-2" onClick={enviarDatos}>Registrarme</button>
                    <NavLink className="button" to={"/login"} >Regresar</NavLink>
                </div>
           {
               registro && 
               <div >
                   <div className="notification has-text-primary mt-2">
                   {registro.msg}
                  
                    </div>
                   <NavLink className="button" to={"/login"} >Ir a login</NavLink>

                </div>
           }
            </form>       
        </div>
    )
}

export {Registro}