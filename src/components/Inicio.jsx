import React from "react"
import { Table_guias } from "./Table_guias"


export function Inicio(){

    return(
        <>
        <h1> inicio </h1>
        <form>
            <label htmlFor="name" className="form-label"> Nombre </label>
            <input type="text" className="form-control" />

            <label htmlFor="pass" className="form-label"> Contraseña </label>
            <input type="password" className="form-control"/>
            <button type="botton"> iniciar session </button>
        </form>
        <Table_guias />
        </>

    )
}


