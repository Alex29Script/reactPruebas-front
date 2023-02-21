import { useState,useEffect, useContext, createContext } from "react"
import { Menu2 } from "./Menu2"

export const DashContext = createContext();

export const Menu=()=>{
    const[ Dash, setDash]=useState([{
        "s1":"",
        "s2":"",
        "id":""
    }])
    
    

    const onMenu=(e,letra)=>{
        console.log(letra)
        setDash([{
            "s1":letra,
            "s2":"",
            "id":""
        }])
    }

     
    return(
        <>
        <DashContext.Provider value={{
            variable:Dash,
            funcion:setDash
            }}>
            
      
        
        <h1>Menu 1</h1>
            <button onClick={e=>onMenu(e,'a')}> Elegir 1 </button>
            <button onClick={e=>onMenu(e,'b')}> Eliger 2</button>
            <button onClick={e=>onMenu(e,'c')}> Elegir 3</button>
        <h1> Menu 2 </h1>
        <Menu2 Dash={Dash}/>

        <h1>Menu 3</h1>


        <hr />
        {
            Dash.map( dash=>
                <div key={dash.s1}>
                <h4 >{dash.s1}</h4>
                <h4>{dash.s2}</h4>
                <h4>{dash.id}</h4>
                </div>
            )
        }
        </DashContext.Provider>
        </>

        
    )
}