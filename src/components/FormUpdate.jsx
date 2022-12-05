import React, { useEffect, useState } from "react";
import { url_server } from "../server_backend/conexion";

export function FormUpdate({XGuias}){
    const actualizar_guia=(event)=>{
        event.preventDefault()
        const guia={};
        guia.username="alex32api"
        //guia._id=document.getElementById("id").value;
        guia.nit=document.getElementById("nit").value;
        guia.fecha=document.getElementById("fecha").value;
        guia.dir_recogida=document.getElementById("dir_recogida").value;
        guia.ciudad_recogida=document.getElementById("dir").value;
        guia.largo=document.getElementById("largo").value;
        guia.ancho=document.getElementById("ancho").value;
        guia.alto=document.getElementById("alto").value;
        guia.peso=document.getElementById("peso").value;
        guia.nombre_des=document.getElementById("nombre_des").value;
        guia.nit_des=document.getElementById("nit_des").value;
        guia.dir_des=document.getElementById("dir_des").value;
        guia.ciudad_des=document.getElementById("ciudad_des").value;
        guia.estado="Guardado";
        console.log(document.getElementById("delicado").value)
        if (document.getElementById("delicado").value=="true"){
            guia.delicado=true
        }else{
            guia.delicado=false
        }

            console.log("guia actualizar: ",guia)
        
        fetch(`${url_server}/guia/agregar`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"post",
            body:JSON.stringify({guia})
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
        
        }
    





    return(
        <>
        <h3>Formulario de Guía</h3>
        
       
            {
            XGuias.map(guia=>
            <div className="container-sm">
            <form id="form_guia" className="row g-3" key={guia._id} onSubmit={(event)=>actualizar_guia(event)} > 
                <div className="col-md-4">
                    <label className="form-label" htmlFor="id">id</label>
                    <input className="form-control"  required type="text" id="id" name="id" value={guia._id} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit">NIT del Remitente:</label>
                    <input className="form-control" required type="text" id="nit" name="nit" defaultValue={guia.nit} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="fecha">Fecha de Recogida </label>
                    <input className="form-control" required type="datetime" id="fecha" name="fecha" defaultValue={guia.fecha}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir">Dirección de Recogida</label>
                    <input className="form-control" required type="text" id="dir" name="dir" defaultValue={guia.dir_recogida}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_recogida">Ciudad de Recogida </label>
                    <input className="form-control" required type="text" id="dir_recogida" name="dir_recogida" defaultValue={guia.ciudad_recogida}/>
                </div>
                <br></br>
                <br></br>
                <p>Medidas y especificaciones</p>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="largo">largo:</label>
                    <input className="form-control" required type="number" id="largo" min="1"  name="largo" defaultValue={guia.largo}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ancho">ancho:</label>
                    <input className="form-control" required type="number" id="ancho"  min="1" name="ancho" defaultValue={guia.ancho}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="alto">alto</label>
                    <input className="form-control" required type="number" id="alto" min="1" defaultValue={guia.alto}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="peso">peso (Kg)</label>
                    <input className="form-control" required type="number" id="peso" min="1" name="peso" defaultValue={guia.peso}/>
                </div>
                <div className="col-md-4">          
                <select  className="form-select" name="delicado" id="delicado">
                    <option value="true">delicado</option>
                    <option value="false" selected>no delicado</option>
                </select>
                </div>  

                <p>Destinatario</p>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit_des">NIT del Destinatario:</label>
                    <input className="form-control" required type="text" id="nit_des" defaultValue={guia.nit_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nombre_des">Nombre del Destinatario:</label>
                    <input className="form-control" required type="text" id="nombre_des" name="nombre_des" defaultValue={guia.nombre_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_des">Direccion del destinatario:</label>
                    <input className="form-control" required type="text" id="dir_des" name="dir_des" defaultValue={guia.dir_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ciudad_des">Ciudad de Destino:</label>
                    <input className="form-control" required type="text" id="ciudad_des" name="ciudad_des" defaultValue={guia.ciudad_des} />
                </div>

                <button onClick="">enviar</button>
            </form>
            </div>
            )
            }
                             
        </>
    )

}