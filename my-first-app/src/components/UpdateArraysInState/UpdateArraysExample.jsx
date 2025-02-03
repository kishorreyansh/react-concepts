import { useState } from "react";

function UpdateArraysExample(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods(f => [...f,newFood]);
    }

    function handleRemoveFoods(index){
        setFoods(f => f.filter((_,i) => i !== index));
    }

    return(
        <>
        <div class="list-group">
            <h2> List of Food</h2>
            <ul class="list-group list-group-flush">
                {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFoods(index)} class="list-group-item">
                        {food}
                        </li>
                    )}
            </ul>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control mb-2" id="foodinput" />
            <button type="submit" class="btn btn-primary mb-2" onClick={handleAddFood}>Add Food</button>
        </div>
        </>
    );
}

export default UpdateArraysExample;