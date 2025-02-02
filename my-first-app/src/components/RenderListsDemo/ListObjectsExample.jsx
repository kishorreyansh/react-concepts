function ListObjectsExample(){

    const fruitsObject = [{id: 1,name: "Apple" , calories: 25},
                            {id: 2,name: 'Orange', calories: 45},
                            {id: 3,name: 'Banana', calories: 87},
                            {id: 4,name: 'Grapes', calories: 98}
                        ]
    //fruitsObject.sort((a,b) => a.name.localeCompare(b.name)); //To Sort Aplhabetically
    //fruitsObject.sort((b,a) => b.name.localeCompare(a.name)); //To Sort Reverse Order
    //fruitsObject.sort(a.calories - b.calories); //Numeric
    //fruitsObject.sort(b.calories - a.calories); //Reverse Numeric

    const fruitsList = fruitsObject.map(fruit => (<li key={fruit.id}>
                                                    {fruit.name} : &nbsp;
                                                    {fruit.calories}
                                                    </li>));

    const lowCalFruits = fruitsObject.filter(fruit => fruit.calories < 50);
    const fruitsList1 = lowCalFruits.map(fruit1 => (<li key={fruit1.id}>
                                                    {fruit1.name} : &nbsp;
                                                    {fruit1.calories}
                                                    </li>));

    const highCalFruits = fruitsObject.filter(fruit => fruit.calories >= 50);
    const fruitsList2 = highCalFruits.map(fruit2 => (<li key={fruit2.id}>
                                                    {fruit2.name} : &nbsp;
                                                    {fruit2.calories}
                                                    </li>));                                                

    return(<ol>{fruitsList2}</ol>)


    
}

export default ListObjectsExample;