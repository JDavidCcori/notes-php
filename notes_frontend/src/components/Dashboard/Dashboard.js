import React, { useEffect, useState } from "react";
import { PublicTask } from "../PublicTask/PublicTask";
import { TaskRegister } from "../TaskRegister/TaskRegister";
import { UserItem } from "../UserItem/UserItem";

const Dashboard = () =>{

    const [tareas, setTareas] = useState([])
    const [tareasPublicas, setTareasPublicas] = useState([])
    const taskByUserurl = "http://localhost:3000/api/v1/tasksbyuser.php"
    const publicTaskurl = "http://localhost:3000/api/v1/getpublictasks.php"

    const session = JSON.parse(sessionStorage.getItem('Sesion_de_usuario'))
    
    useEffect(()=>{
        fetch(`${taskByUserurl}?user_id=${session.user_id}`)
        .then(response => response.json())
        .then(datos => {
            setTareas(datos.items)
        })
    },[])

    useEffect(()=> {
      fetch(publicTaskurl)
      .then(response => response.json())
      .then(datos => {
          setTareasPublicas(datos.items)
      })
    },[])

    return (

        <div className="container">
            <div className="columns">
              <div className="column">
                  <div className="box">
                  <article className="message is-primary">
                     
                      <div className="message-body">
                       Agrega tus tareas
                      </div>
                    </article>
                    <TaskRegister/>

                  </div>
               
              </div>
              <div className="column">
              <article className="panel is-info ">
                  <p className="panel-heading ">
                    Mis tareas
                  </p>
                 {
                     tareas.map((tarea) => (
                         <UserItem key={tarea.id} {...tarea}/>
                     ))
                 }
                </article>
              </div>
              <div className="column">
                <article className="panel is-warning">
                  <p className="panel-heading ">
                    Tareas publicas
                  </p>
                {
                  tareasPublicas.map((tarea) => (
                    <PublicTask key={tarea.id} {...tarea}/>
                  ))
                }
                </article>
              </div>
            </div>
        </div>
    )
}

export {Dashboard}