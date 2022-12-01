import React from "react"
import { Table_guias } from "./Table_guias"


export function Inicio(){

    return(
        <>
        <h1> inicio </h1>
        <form>
            <label htmlFor="name"> nombre </label>
            <input type="text" />

            <label htmlFor="pass"> contrasena </label>
            <input type="password" />
            <button type="botton"> iniciar session </button>
            </form>
        <Table_guias />
        </>

    )
}


