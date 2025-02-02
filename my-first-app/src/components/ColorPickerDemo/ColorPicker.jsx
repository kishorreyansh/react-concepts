import { useState } from "react";


function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");
    
    function handleChangeColor(event){
        setColor(event.target.value);
    }
    
    return(
        <div className="color-picker-container">
            <h1> Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value={color} title="Choose your color" onChange={handleChangeColor}></input>
        </div>
    );
}

export default ColorPicker;