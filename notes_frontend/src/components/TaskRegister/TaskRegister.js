import React, { useState } from "react";
import { sendData } from "../../utils/Utils";
import { Input } from "../Input/Input";


const TaskRegister= ( {makeRefresh})=>{
    const [titulo, setTitulo] = useState("")
    const [contenido, setContenido] = useState("")
    const [fin, setFIn] = useState("")
    const [prioridad, setPrioridad] = useState("")

    const URL = "http://34.140.9.129/api/v1/registrotareas.php"
    const session=JSON.parse(sessionStorage.getItem("Sesion_de_usuario"))

    const onChange=(evento)=>{
        setPrioridad(evento.target.value)
    }

    const enviarDatos = async ()=>{
        const datos = {
            "user_id": session.user_id,
            "title": titulo,
            "content": contenido,
            "deadline": fin,
            "priority": prioridad,
        }
        const tarea = await sendData(URL, datos)
        makeRefresh(true)
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
            <div className="select mb-2">
                <select onChange={onChange} value={prioridad}>
                    <option value="urgente">Urgente</option>
                    <option value="medio">Medio</option>
                    <option value="bajo">Bajo</option>
                </select>
            </div>
            <div>
                <button className="button is-primary mr-3" onClick={enviarDatos}>Agregar</button>
               
            </div>
        </div>


    )
}


export {TaskRegister}


