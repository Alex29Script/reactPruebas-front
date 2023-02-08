import { Hijo } from "./hijo"
import { useState } from "react"

export const Padre=()=>{

    const [Idhijo,setIdhijo]=useState(0)

    const enviar = (event)=>{
        event.preventDefault()
        const num= document.getElementById("xx").value
        console.log(num)
        setIdhijo(parseInt(num))
    }


    return(
        <>
            <h1># Componente Padre </h1>
            <form >
            <input type="number" className="xx" id="xx" />
            <button type="submit" onClick={event=>enviar(event)}> calcular suma </button>
            </form>

            < Hijo id={Idhijo}/>
        </>
    )
}