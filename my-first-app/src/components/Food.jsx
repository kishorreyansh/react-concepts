function Food(){
    const food1 = "Mango";
    const food2 = "Apple";
    return(
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;