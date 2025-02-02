function ListExample1(){

    const fruits = ['Apple', 'Mango', 'Grapes', 'PineApple'];
    fruits.sort();

    const fruitsItems = fruits.map(fruit => <li>{fruit}</li>)
    return(<ol>{fruitsItems}</ol>);
}

export default ListExample1;