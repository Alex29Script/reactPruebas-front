import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { url_server2 } from "../server_backend/conexion2";

export const Sever2consulta=()=>{
    const[Mensajes, setMensajes]=useState([])
    
    const buscar_mensajes=()=>{
        fetch(`${url_server2}/mensajes/buscar`,{
            headers:{"Content-Type":"application/json"},
            mode:"cors",
            method:"get",
            }).then(res=>res.json())
            .then(res=>{
                console.log(res.mensajes)
                setMensajes(res.mensajes)
            })
    }
    useEffect(()=>{
        buscar_mensajes()
    },[])

    return(
        <>
        
        <table>
            <thead>
                <tr>
                    <th>fecha</th>
                    <th>estado</th>
                    <th>mensaje</th>
                </tr>
            </thead>
            <tbody>
                {
                    Mensajes.map(mensaje=>
                    <tr key={mensaje._id}>
                    <td><input type="datetime-local" name="" id="" value={mensaje.fecha} /></td>
                    <td>{mensaje.estado}</td>
                    <td>{mensaje.mensaje}</td>
                    </tr>   
                        
                    )
                }

            </tbody>

        </table>

        
        
        </>


    )
}