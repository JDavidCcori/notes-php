import React, { useEffect, useState } from "react";
import { fechaActual, sendData } from "../../utils/Utils";
import { Comments } from "../Comments/Comments";
import { Input } from "../Input/Input";
import "./Comment.css"

const Comment = ({task_id}) => {

    const [comentario, setComentario] = useState('')
    const [open, setOpen] = useState(false)
    const [comentarios, setComentarios] = useState([])
    const session = JSON.parse(sessionStorage.getItem('Sesion_de_usuario'))

    const now = fechaActual()
    
    const atCommentUrl = "http://34.140.9.129/api/v1/atcomment.php"
    const getCommentUrl = "http://34.140.9.129/api/v1/getcomment.php"

    const atComment =async () => {
        const data = {
            "user_id": session.user_id,
            "task_id": task_id,
            "content": comentario,
            "created_at": now
        }
        setOpen(false)
        const cm = await sendData(atCommentUrl, data)
    }

    useEffect(()=>{
        fetch(`${getCommentUrl}?task_id=${task_id}`)
        .then(response => response.json())
        .then(data=>{
            setComentarios(data.items)
            console.log(data)
            setComentario('')
        })
    },[open])

    return(
        <div>
            <Input
            setState={setComentario}
            value={comentario}
            type="text"
            placeholder="Escibe comentario"

            />
            <button className="button is-success is-rounded mb-4" onClick={atComment}>Agregar comentario</button>
            <p className="comentario" onClick={()=>{open? setOpen(false):setOpen(true)}}>Ver comentarios</p>
            {!! open && 
               comentarios.map((item)=>(
                <Comments key={item.id} {...item}/>
               ))
            }

        </div>
    )
}

export{Comment}