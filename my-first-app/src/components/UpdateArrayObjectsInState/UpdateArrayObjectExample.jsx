import { useState } from "react";

function UpdateArrayObjectExample(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars((c) => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => (c.filter((_,i) => i !== index)));
    }

    function handleCarYear(event){
        setCarYear(event.target.value);
    }

    function handleCarMake(event){
        setCarMake(event.target.value);
    }

    function handleCarModel(event){
        setCarModel(event.target.value);
    }

    return(
        <>
        <div class="list-group">
            <h2> List of Cars</h2>
            <ul class="list-group list-group-numbered">
                {cars.map((car,index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)} class="list-group-item">
                    {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
        </div>
        <div class="col-auto">
            <input type="text" value={carYear} class="form-control mb-2" onChange={handleCarYear} />
            <input type="text" value={carMake} class="form-control mb-2" onChange={handleCarMake}/>
            <input type="text" value={carModel} class="form-control mb-2" onChange={handleCarModel}/>
            <button type="submit" class="btn btn-primary mb-2" onClick={handleAddCar}>Add Car</button>
        </div>
        </>
    );
}

export default UpdateArrayObjectExample;