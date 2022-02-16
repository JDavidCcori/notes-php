import React,{useState} from "react";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { sendData } from "../../utils/Utils";


const UserItem = ({title, content, deadline, priority, task_id}) => {

    const [titulo, setTitulo] = useState(title)
    const [contenido, setContenido] = useState(content)
    const [fin, setFIn] = useState(deadline)
    const [prioridad, setPrioridad] = useState(priority)
    const [open, setOpen] = useState(false)

    const URL = "http://localhost:3000/api/v1/updatetask.php"
    const updateURL = "http://localhost:3000/api/v1/dopublic.php"


    const onChange=(evento)=>{
        setPrioridad(evento.target.value)
    }

    const enviarDatos=async ()=>{
        const datos = {
            "task_id": task_id,
            "title": titulo,
            "content": contenido,
            "deadline": fin,
            "priority": prioridad,
        }
        const tarea = await sendData(URL, datos)
        if (tarea.Succes === true) {
            setOpen(false)
        }
    }

    const hacerPublico = async () => {
      const datos = {
        "task_id": task_id,
        "is_public": true,
      }
      const publico = await sendData(updateURL, datos)
      console.log(publico)
    }

    return (
        <>
            <div className="card m-2">
              <header className="card-header">
                <p className="card-header-title">
                  {title}
                </p>
                <button className="card-header-icon " onClick={hacerPublico} >
                  <span className="icon">
                    <i className="fas fa-share-square" ></i>

                  </span>
                </button>
              </header>
              <div className="card-content">
                <div className="content">
                    {content}
                  
                </div>
                  <time >{deadline}</time>
              </div>
              <div className=" ">
               
                <button className="button is-warning ml-3 mr-3" onClick={()=> setOpen(true)}>Editar</button>
                <button className="button is-danger mb-3">Eliminar</button>
        
              </div>
              {!!open &&

                <Modal>
                  
                    <div className="box">
                    <article className="message is-primary">
                     
                      <div className="message-body">
                       Actualiza tu tarea
                      </div>
                    </article>
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
                            <select onChange={onChange}  value={prioridad}>
                                <option value="urgente">Urgente</option>
                                <option value="medio">Medio</option>
                                <option value="bajo">Bajo</option>
                            </select>
                        </div>
                        <button className="button is-primary" onClick={enviarDatos}>Actualizar</button>
                        <button className="button" onClick={()=> setOpen(false)}>Cancelar</button>
                    </div>
                </Modal>
              }
            </div>
        </>

            
    )
}



export{UserItem}