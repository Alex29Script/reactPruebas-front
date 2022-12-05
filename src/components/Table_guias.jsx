import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { url_server } from "../server_backend/conexion";


export function Table_guias({username}){
    const[Guias, setGuias]=useState([])
    if(!username){
        username="alex32api"
    }
    
    const load_guias=()=>{
        
        console.log(`${url_server}/`)
        //fetch(`${url_server}/`,{
        console.log(`${url_server}/guias/todas/?username=${username}`)
        fetch(`${url_server}/guias/todas/?username=${username}`,{
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=>{                 
                    setGuias(res.guias.user_guias)                    
            }).catch(function (reason){console.log(reason)})
    }
    
    useEffect(()=>{
        load_guias()
        
        },[])
   //href={url_server+"/guia/buscar/?id_guia="+guia._id+"&username="+username}


    return(
        <>
        { 
            <h1>Guia de {username}</h1>
        
        }
        
        <table  className="table">
        <thead>
            <tr>
                <th  scope="col"> ID Guia2</th>
                <th  scope="col"> Destinatario </th>
                <th  scope="col">Fecha </th>
                <th  scope="col"> Ciudad </th>
                <th  scope="col"> Ciudad Destino </th>
                <th  scope="col"> Estado </th>
                <th  scope="col"> Acciones </th>


            </tr>
        </thead>
        <tbody>
            {
                Guias.map(guia=> 
                
                <tr key={guia._id}>
                <td scope="row"> {guia._id}</td>
                <td> {guia.nombre_des} </td>
                <td> {guia.fecha} </td>
                <td> {guia.ciudad_recogida} </td>
                <td> {guia.ciudad_des} </td>
                <td> {guia.estado} </td>
                <td><a className="btn btn-primary" role="button" href={url_server+"/guia/buscar/?id_guia="+guia._id+"&username="+username}>ver</a></td>
                </tr>
                )
            
             }
        </tbody>

        </table>

        
        
        </>

    )
}
