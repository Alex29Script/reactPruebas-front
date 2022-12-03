import React, { useState } from "react";
import { Input2 } from "./input2";

export const Input = ()=>{
    
    const[Guia,setGuia]= useState([])
    
    const onClickForm=(event)=>{
        event.preventDefault()
        const id_guia=document.getElementById("guia").value
        setGuia(id_guia)


    }


    return(
        <>
        <form>
        <label htmlFor="guia">guia: </label>
        <input type="text" name="guia" id="guia" />
        <input type="submit" value="enviar" onClick={(event)=>onClickForm(event)} />
        </form>
       
        {
            <h1>{Guia}</h1>
        }
        <Input2 guia={Guia}/>      
        </>
    )

}