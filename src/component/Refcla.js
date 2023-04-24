import React,{useEffect, useRef} from "react";
 function Refclass(){
    const emailInputRef=useRef();
    const nameInput =useRef();
    function getText(){
        
        console.log(emailInputRef,nameInput);

    }
    useEffect(()=>{
        setInterval(()=>{
            emailInputRef.current.style.background="blue";
            nameInput.current.style.background="pink"
        },5000);
       
        return()=>{}
    },[emailInputRef]);
    return (
        <div >
            <input ref={emailInputRef} placeholder="email" id="email"/>
            <br/>
            <input ref={nameInput} placeholder="enter ypur name" id="name"/>
            <br/>
            <button onClick={getText}>Submit</button>
        </div>
    );
}
export default Refclass