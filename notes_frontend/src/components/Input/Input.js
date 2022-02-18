import React from "react";

function Input({setState, value, label, placeholder, type, leyendError,Inputname}){
    
    const onChange =(e) => {
      setState(e.target.value)
    }

    let iconno = ''
    if (type ==='password'){
      iconno = 'fas fa-lock'
    }else if(type === 'text'){
      iconno = 'fas fa-user'
    }else if(type === 'textarea'){
      iconno = 'fas fa-tasks'
    }else if(type === 'email'){
      iconno = 'far fa-envelope'
    }else if(type === 'date'){
      iconno = 'far fa-calendar'
    }
    else{ 
      iconno = 'far fa-envelope'
    }

    return(

        <div className="field">
        <label className="label">{label}</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" 
            onChange={onChange}
            value= {value}
            placeholder={placeholder}
            type={type}
            name = {Inputname}
          />
          <span className="icon is-small is-left">
          <i className={iconno}></i>
          </span>
        </div>
        <h6 className="title is-6 is-danger">{leyendError}</h6>
      </div>
    )
}

export {Input}