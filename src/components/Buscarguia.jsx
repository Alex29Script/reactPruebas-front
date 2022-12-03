import React from "react";
import { FormUpdate } from "./FormUpdate";

export function Buscarguia(){

    return(
       <>
        <h1> Formulario: Buscar Guia </h1>
        <div className="container-sm">
            <form action="">
                <label htmlFor="id"> ID Guia: </label>
                <input type="text" id="id"/>
                <input type="submit" value="buscar" />
            </form>
        </div>
        <br />
        <div className="container-sm">
            <FormUpdate/>
        </div>
       </>
    )

}