import React from "react";
import { Input } from "../Input/Input";


function UpdateUser({datos}) {

  const [name, setName] = React.useState("")
  const [dayOfBirth, setDayOfBirth] = React.useState("")
  const [biography, setBiography] = React.useState("")

  console.log(datos)

    return(
      <div>
        <Input
        setState={setName}
        value={name}
        type="text"
        placeholder="Nombre"
        label="name"
        />
        <Input
        setState={setDayOfBirth}
        value={dayOfBirth}
        type="date"
        placeholder="Fecha de Nacimiento"
        label="Fecha de Nacimiento"
        />
        <Input
        setState={setBiography}
        value={biography}
        type="textarea"
        placeholder="Biografía"
        label="Biografía"
        />
      </div>
    )
}

export {UpdateUser}