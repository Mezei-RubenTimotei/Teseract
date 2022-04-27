import React, {useState} from "react";
import FullCounter from "./Component";
import ReactHooks from "./ReactHooks";

export const ThemeContext= React.createContext()

function App()
{
    const [theme, setTheme]=useState('red')
    return(
        <>
       <ThemeContext.Provider value={{background: theme}}>
       <FullCounter initialValue={5}/>
       <br />
       <ReactHooks initialValue={6} />
       <button onClick={()=>setTheme(
           prev => { return prev==='lime'?'turquoise':'lime'}
       )}>Change</button>
       </ThemeContext.Provider>
        </>
    );
}

export default App;