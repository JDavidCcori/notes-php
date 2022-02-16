const sendData= async(URL,data)=>{

    const response= await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const respuesta = await response.json()
    return respuesta
}

const fechaActual = () => {
    const now = new Date()
    let fechareal = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    return fechareal
}

export {sendData, fechaActual}