import React from "react";
import { FormUpdate } from "./FormUpdate";
import { useEffect } from "react";
import { useState } from "react";
import { url_server } from "../server_backend/conexion";

//"637d7d9167c1cf45c86ad647"
export function Buscarguia(){
    const [ Guia_encontrada, setGuia_encontrada]= useState([])
    
    const buscar_guia=()=>{
        
        const user="Liam"
        const guia_unica=document.getElementById("id_").value
        console.log(`${url_server}/guia/buscar/?username=${user}&id_guia=${guia_unica}`)
        //fetch(`${url_server}/`,{
        fetch(`${url_server}/guia/buscar/?username=${user}&id_guia=${guia_unica}`,{
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=>{                 
                    setGuia_encontrada([res.guias.user_guias])
                    console.log("este es ", [res.guias.user_guias])
                    return res.guias.user_guias
            }).catch(function (reason){console.log(reason)})
    }
    const enviar= async(event)=>{
        event.preventDefault()
        console.log("hola")
        await buscar_guia()
    }

   
    return(
    <>
        <h1> Formulario: Buscar Guia </h1>
        <div className="container-sm">
            <form onSubmit={(event)=> enviar(event)}>
                <label htmlFor="id"> ID Guia: </label>
                <input type="text" id="id_"/>
                <input type="submit" value="buscar" />
            </form>
                
        </div>
        <br />
        {
        Guia_encontrada.map(xguia=>
        <div className="container-sm">
            <FormUpdate XGuias={Guia_encontrada}/>
        </div>
        )
        }
    </>
    )

}