import React, { useState } from "react";
import { fechaActual, sendData } from "../../utils/Utils";
import { Input } from "../Input/Input";


const TaskRegister= ()=>{
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")
    const [fin, setFIn] = useState("")
    const [prioridad, setPrioridad] = useState("")

    const URL = "http://localhost:3000/api/v1/registrotareas.php"
    const session=JSON.parse(sessionStorage.getItem("Sesion_de_usuario"))

    const now = fechaActual()

    const onChange=(evento)=>{
        setPrioridad(evento.target.value)
    }

    const enviarDatos=async ()=>{
        const datos = {
            "user_id": session.user_id,
            "title": titulo,
            "content": contenido,
            "created_at": now,
            "deadline": fin,
            "priority": prioridad,
        }
        const tarea = await sendData(URL, datos)
        console.log(tarea)
    }

    return (
        <div>
            <Input 
            setState={setTitulo}
            value={titulo}
            label="Título"
            placeholder="Tarea para mañana"
            type="text"
            />
            <Input 
            setState={setContenido}
            value={contenido}
            label="Contenido"
            placeholder="Tarea para mañana"
            type="textarea"
            />
            <Input 
            setState={setFIn}
            value={fin}
            label="Fecha fin"
            placeholder="2022-02-14"
            type="date"
            />
            <div>
                <select onChange={onChange} value={prioridad}>
                    <option value="urgente">Urgente</option>
                    <option value="medio">Medio</option>
                    <option value="bajo">Bajo</option>
                </select>
            </div>
            <button className="button is-primary" onClick={enviarDatos}>Agregar</button>
            <button className="button " >Cancelar</button>
            
        </div>


    )
}


export {TaskRegister}


