import { useEffect, useState } from "react"
import { Menua } from "./Menua"
import { Menub } from "./Menub"
import { Menuc } from "./Menuc"

export const Menu2=({Dash})=>{
    const[Dash2, setDash2]=useState(Dash)

    useEffect(()=>{
        setDash2(Dash)
    },[Dash])
    
    if(Dash2[0]['s1']=="a"){
        return(
            <Menua/>
        )
    }else if(Dash2[0]['s1']=="b"){
        return(
            <Menub/>
        )
    }else if(Dash2[0].s1=="c"){
        return(
            <Menuc/>
    )
    }else{
        return(
            <h3>nada</h3>
        )
    }
    
}