import { useEffect } from "react";
import { useState } from "react";

function UseEffectExample2(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",windowResize);
        console.log("EVENT LISTENER ADDED");

        return() => {
            window.removeEventListener("resize",windowResize);
            console.log("EVENT LISTENER REMOVED");
        }
    },[]);

    useEffect(() => {
        document.title = `${width} * ${height}`;
    },[width,height]);
    function windowResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    );
}

export default UseEffectExample2;