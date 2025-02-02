import { useState } from "react";

function UpdateObjectExample(){

    const [car, setCar] = useState(
                                    {
                                        year: 2024,
                                        make: "Ford",
                                        model: "Mustang"
                                    }
                                );
    function handleChangeYear(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleChangeMake(event){
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleChangeModel(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div className="form-row">
            <p> Your Favorite Car is: {car.year} {car.make} {car.model}</p>
            <div class="form-group">
                <label >Year</label>
                <input type="number" class="form-control" value={car.year} onChange={handleChangeYear}/>
            </div>
            <div class="form-group">
                <label >Brand</label>
                <input type="text" class="form-control" value={car.make} onChange={handleChangeMake}/>
            </div>
            <div class="form-group">
                <label >Model</label>
                <input type="text" class="form-control" value={car.model} onChange={handleChangeModel}/>
            </div>
        </div>
    )
}

export default UpdateObjectExample;