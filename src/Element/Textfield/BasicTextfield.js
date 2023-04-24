import React from "react";
export default function BasicTextField({id="",label="",type="",placeholder="", onChange=(e)=>{},
}){
    return(
        <div class="mb-3">
    <label for={id} class="form-label">{label}</label>
    <input type={type} class="form-control" id={id} aria-describedby="emailHelp" placeholder={placeholder}
    onChange={onChange}
    />
    
  </div>
    )
}