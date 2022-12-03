import React, { useEffect, useState } from "react";
import { url_server } from "../server_backend/conexion";

export function FormUpdate({Xguias}){
    const [Xguias2, setXguias]=useState([Xguias])
    useEffect(()=>{
        setXguias([Xguias])
    },[])

    return(
        <>
        <h3>Formulario de Guía</h3>
        
       
            {
            Xguias2.map(guia=>
            <div className="container-sm">
            <form id="form_guia" className="row g-3" key={guia._id}> 
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