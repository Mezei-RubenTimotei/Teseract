import React, {Component,Consumer} from "react";
import { ThemeContext } from "./App";

export default class FullCounter extends Component{
    constructor(props)
    {
        super(props)  
        this.state={
            nr: props.initialValue
        }
    }

    calculus(increment)
    {
        this.setState(prev =>{
                return{nr: prev.nr + increment}
            })
    }

    render(){
        return(
        <ThemeContext.Consumer>
            {style=>(
             <>
            <button style={style} onClick={()=>this.calculus(-1)}>minus</button>
            <span>{this.state.nr}</span>
            <button style={style} onClick={()=>this.calculus(+1)}>add</button>
            </>   
            )
            }
        
        </ThemeContext.Consumer>
        )
    }
}