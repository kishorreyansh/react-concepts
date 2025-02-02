function Button(){

    const handleClick = () => {
        console.log("Click Me");
    }

    const handleClickName = (name) => {
        console.log(`${name} , You Click Me`);
    }

    let count = 0;
    const handleClickCondition = (name) => {
        if(count < 3){
            count++;
            console.log(`${name}, You Clicked Me ${count} times`);
        }else{
            console.log(`${name}, Stop Clicking Me`)
        }
    }

    const handleClickChange = (e) => {
        console.log(e);
        e.target.textContent = "Change Bird 🦆";
    }

    const handleDoubleClick = (e) => {
        e.target.textContent = " Its Double Clicked";
    }
    return(
        <>
            <button onClick={handleClick}> Click Me 🙋</button>
            <button onClick={() => handleClickName("Bro")}> Click Me 😊</button>
            <button onClick={() => handleClickCondition("Bro")}>Click Me 👊</button>
            <button onClick={(e) => handleClickChange(e)}>Change Me 🐎</button>
            <button onClick={(e) => handleDoubleClick(e)}> Double Click Me</button>
        </>
        
    );
}

export default Button;