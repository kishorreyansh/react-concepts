import { useState, useEffect } from "react";

function UseEffectExample(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //Approach 1 using arrow function or anonyms function
    //It executes everytime
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    //Approach 2 using empty array
    //It executes only once
    // useEffect(() => {
    //     document.title = `My Counter Program`;
    // },[])

    //Approach 1 using dependency
    //It executes only when value updates
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    },[count, color])

    function handleAddCount(){
        setCount(c => c + 1);
    }

    function handleSubtractCount(){
        setCount(c => c - 1);
    }

    function handleChangeColor(){
        setColor(c => c === "green" ? "red" : "green" );
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={handleAddCount}>Add Count</button>
            <button onClick={handleSubtractCount}>Subtract</button>
            <button onClick={handleChangeColor}>Change Color</button>
        </>
    );
}

export default UseEffectExample;