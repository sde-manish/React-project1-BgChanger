import React from "react";
import { useState } from "react";

function Bg(){
    const[color, setColor] = useState('#003333');
        return(
            <div style={{width: '100vw',height:'100vh',padding:'20px' ,display:"flex",flexDirection:'column'
             , justifyContent:"center", alignItems:'center', position:'relative', backgroundColor:color}}>
                <div style={{position:'fixed', top:'40px', backgroundColor:'white', padding:'5px 10px',
                            color:'black', borderRadius:'15px'}}><h2>Background color changer</h2></div>
                <div style={{position:'fixed', bottom:'10px', backgroundColor:'white',padding:'10px 5px',
                    borderRadius:'15px'}}>
                    <button style={{backgroundColor:'red'}} onClick={()=>setColor('red')} >Red</button>
                    <button style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
                    <button style={{backgroundColor:'blue'}} onClick={()=>setColor('Blue')}>Blue</button>
                    <button style={{backgroundColor:'olive'}} onClick={()=>setColor('Olive')}>Olive</button>
                    <button style={{backgroundColor:'gray'}} onClick={()=>setColor('Gray')}>Gray</button>
                    <button style={{backgroundColor:'yellow', color:'black'}} onClick={()=>setColor('Yellow')}>Yellow</button>
                    <button style={{backgroundColor:'pink', color:'black'}} onClick={()=>setColor('Pink')}>Pink</button>
                    <button style={{backgroundColor:'purple'}} onClick={()=>setColor('Purple')}>Purple</button>
                    <button style={{backgroundColor:'lavender', color:'black'}} onClick={()=>setColor('Lavender')}>Lavender</button>
                    <button style={{backgroundColor:'white', color:'black'}} onClick={()=>setColor('White')}>White</button>
                    <button style={{backgroundColor:'black', color:'white'}} onClick={()=>setColor('Black')}>Black</button>
                </div>
            </div>
        )
}

export default Bg;