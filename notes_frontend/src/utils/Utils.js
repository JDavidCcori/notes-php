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

export {sendData}