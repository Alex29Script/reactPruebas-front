import React from "react";
import { render } from "react-dom";

export function Table_guias(personas){

    return(
        <>
        <table>
        <thead>
            <tr>
                <th> nombre</th>
                <th> Apellido </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Alex </td>
                <td> Ariza </td>

            </tr>
            <td> Andres </td>
            <td> Ortiz  </td>
        </tbody>

        </table>

        
        
        </>

    )
}
