import React from "react";
import { url_server2 } from "../server_backend/conexion2";

export const Server2 =()=>{
    

    
    const enviar=(event)=>{
        event.preventDefault()
        const mensaje={}
        mensaje.mensaje=document.getElementById("mensaje").value
        mensaje.fecha=document.getElementById("fecha").value
        mensaje.estado=document.getElementById("estado").value
        console.log(mensaje, typeof(mensaje.fecha))
        fetch(`${url_server2}/c`,{
        headers:{"Content-Type":"application/json"},
        mode:"cors",
        method:"post",
        body:JSON.stringify({mensaje})
        }).then(res=>res.json())
        .then(res=> {console.log(res)})

    }

    

    return(
        <>
        <form onSubmit={(event)=>enviar(event)}>
            <p>
            <label htmlFor="mensaje"></label>
            <input type="text" name="mensaje" id="mensaje" />
            </p>
            <p>
                <label htmlFor="fecha"></label>
                <input type="datetime-local" name="fecha" id="fecha" />
            </p>
            <p>
                <label htmlFor="estado"></label>
                <input type="text" name="estado" id="estado" />
            </p>
            <p>
                <input type="submit" value="enviar" />
            </p>

        </form>
        
            <input type="datetime-local" name="" id="" value />
        </>

    )
}