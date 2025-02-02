import { useState } from "react";

function UseStateExample1(){

        const [name, setName] = useState("Guest");
        const [age, setAge] = useState(0);
        const [isEmployed, setIsEmployed] = useState(false);

        const changeName = () => {
            setName("Reyansh");
            console.log(name);
        }

        const changeAge = () => {
            setAge(age + 1);
        }

        const changeEmployee = () => {
            setIsEmployed(!isEmployed);
        }
        return(
            <div>
                <p>Name: {name}</p>
                <button onClick={changeName}>Change Name</button>

                <p>Age: {age}</p>
                <button onClick={changeAge}>Change Age</button>

                <p>Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={changeEmployee}>Change Name</button>
            </div>
        );

}

export default UseStateExample1;