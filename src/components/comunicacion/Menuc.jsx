import { useContext } from "react"
import { DashContext } from "./menu"


export const Menuc=()=>{
    const contexto =useContext(DashContext)
    const fun=contexto.funcion

    const boton=()=>{
        console.log("boton en c")
        console.log(contexto)
        fun([{s1: 'b', s2: '', id: ''}])
        
    }

    return(
        <>
        <h2>Menu C</h2>
        <button onClick={boton}>
            Pasar a A
        </button>
        </>
    )
}