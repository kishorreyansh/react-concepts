import { useState } from "react";
import './CounterExample.css';

function CounterExample(){

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-dispaly">{count}</p>
            <button className="counter-button" onClick={handleIncrement}>Increment</button>
            <button className="counter-button" onClick={handleDecrement}>Decrement</button>
            <button className="counter-button" onClick={handleReset}>Reset</button>

        </div>
    );
}

export default CounterExample;