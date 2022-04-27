import React,{useState, useContext} from "react";
import { ThemeContext } from "./App";

export default function ReactHooks({initialValue})
{
    const [nr,setnr]= useState(initialValue)
    const style=useContext(ThemeContext)
    return(
        <>
        <button style={style} onClick={()=>setnr( prev=>prev -1)}>minus</button>
        <span>{nr}</span>
        <button style={style} onClick={()=>setnr( prev=>prev +1)}>add</button>
        </>
        )
}