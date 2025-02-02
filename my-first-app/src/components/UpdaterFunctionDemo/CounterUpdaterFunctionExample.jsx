import { useState } from "react";
import './CounterUpdaterFunctionExample.css';

function CounterUpdaterFunctionExample(){

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    const handleDecrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return(
        <div class="d-grid gap-2 d-md-block">
            <p className="count-display">{count}</p>
            <button className="btn btn-primary mb-3 me-2" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-primary mb-3 me-2" onClick={handleDecrement}>Decrement</button>
            <button className="btn btn-primary mb-3" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default CounterUpdaterFunctionExample;