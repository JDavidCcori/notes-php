import React,{useState} from "react";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { sendData } from "../../utils/Utils";


const UserItem = ({title, content, deadline, priority, task_id,makeRefresh,is_public}) => {

    const [titulo, setTitulo] = useState(title)
    const [contenido, setContenido] = useState(content)
    const [fin, setFIn] = useState(deadline)
    const [prioridad, setPrioridad] = useState(priority)
    const [open, setOpen] = useState(false)

    const URL = "http://34.140.9.129/api/v1/updatetask.php"
    const updateURL = "http://34.140.9.129/api/v1/dopublic.php"
    const deleteTaskURL = "http://34.140.9.129/api/v1/deletetask.php"


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

    let estadoTarea = null
    if (is_public === '1') {
      estadoTarea = '0'
    }else{
      estadoTarea = '1'
    }

    const hacerPublico = async () => {
      const datos = {
        "task_id": task_id,
        "is_public": estadoTarea,
      }
      const publico = await sendData(updateURL, datos)
      console.log(publico,estadoTarea,is_public)
      makeRefresh()
    }

    const deleteTask =async () => {
      const data = {
        'task_id': task_id
      }
      const deleteTask = await sendData(deleteTaskURL, data)
      makeRefresh()
      console.log(deleteTask)
    }

    return (
        <>
            <div className="card m-2">
              <header className="card-header">
                <p className="card-header-title">
                  {title}
                </p>
                <button className="card-header-icon button is-info is-light " onClick={hacerPublico} >
                  <span className="icon">
                    <i className="fas fa-share-square" ></i>

                  </span>
                </button>
              </header>
              <div className="card-content">
                <div className="content">
                    {content}
                  
                </div>
                  <time>Tu tarea vence el: <span className="tag is-medium has-text-weight-bold">{deadline}</span></time>
              </div>
              <div className=" ">
               
                <button className="button is-warning ml-3 mr-3" onClick={()=> setOpen(true)}>Editar</button>
                <button className="button is-danger mb-3" onClick={deleteTask}>Eliminar</button>
        
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
                        
                        label="T??tulo"
                        placeholder="Tarea para ma??ana"
                        type="text"
                        />
                        <Input 
                        setState={setContenido}
                        value={contenido}
                        
                        label="Contenido"
                        placeholder="Tarea para ma??ana"
                        type="textarea"
                        />
                        <Input 
                        setState={setFIn}
                        value={fin}
                        
                        label="Fecha fin"
                        placeholder="2022-02-14"
                        type="date"
                        />
                        <div className="select">
                            <select  onChange={onChange}  value={prioridad}>
                                <option value="urgente">Urgente</option>
                                <option value="medio">Medio</option>
                                <option value="bajo">Bajo</option>
                            </select>
                        </div>
                        <div className="mt-2">
                          <button className="button is-primary mr-3" onClick={enviarDatos}>Actualizar</button>
                          <button className="button" onClick={()=> setOpen(false)}>Cancelar</button>
                        </div>
                    </div>
                </Modal>
              }
            </div>
        </>   
    )
}



export{UserItem}