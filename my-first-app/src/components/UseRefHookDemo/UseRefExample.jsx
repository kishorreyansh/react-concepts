import React, { useState, useRef } from "react";
import { useEffect } from "react";

function UseRefExample(){

    //let [number, setNumber] = useState(0);

    const ref = useRef(0); //returns object
    const inputref = useRef(null);
    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        //setNumber(n => n + 1);
        //ref.current = ref.current + 1;
        ref.current++;
        console.log(ref.current);
        inputref.current.focus();
        inputref.current.style.backgroundColor = "yellow";
    }

    function handleClick1(){
        inputref1.current.focus();
        inputref1.current.style.backgroundColor = "yellow";
        inputref2.current.style.backgroundColor = "";
        
    }

    function handleClick2(){
        inputref2.current.focus();
        inputref1.current.style.backgroundColor = "";
        inputref2.current.style.backgroundColor = "yellow";
        
    }
    return(
        <>
            
            <button className="btn btn-warning" onClick={handleClick1} >Click Me 1</button>
            <br/>
            <input type="text" ref={inputref1}/><br/>
            <button className="btn btn-warning" onClick={handleClick2} >Click Me 2</button>
            <br/>
            <input type="text" ref={inputref2}/>
            
        </>
    );
}

export default UseRefExample;