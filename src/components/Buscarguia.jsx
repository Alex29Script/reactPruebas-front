import React from "react";
import { FormUpdate } from "./FormUpdate";
import { useEffect } from "react";
import { useState } from "react";
import { url_server } from "../server_backend/conexion";
import { Table_guias } from "./Table_guias";

//"637d7d9167c1cf45c86ad647"
export function Buscarguia(){
    const [ Guia_encontrada, setGuia_encontrada]= useState([])
    const[Username, setUsername]=useState([])

    const buscar_guia=()=>{
        
        const user=document.getElementById("username").value
        setUsername(user)
        const guia_unica=document.getElementById("id_").value
        console.log(`${url_server}/guia/buscar/?username=${user}&id_guia=${guia_unica}`)
        //fetch(`${url_server}/`,{
        fetch(`${url_server}/guia/buscar/?username=${user}&id_guia=${guia_unica}`,{
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=>{                 
                    
                    console.log(res.guias.user_guias.fecha)
                    setGuia_encontrada([res.guias.user_guias])
                    
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
                <p>
                    <label htmlFor="username">nombre: </label>
                    <input type="text" name="username" id="username" />
                </p>
                
                <p>
                <label htmlFor="id"> ID Guia: </label>
                <input type="text" id="id_"/>
                </p>
                <input type="submit" value="buscar" />
            </form>
                
        </div>
        <br />
        {
        <div className="container-sm">
        <Table_guias/>
        </div> 
             
        
        }
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