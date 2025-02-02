import { useState } from "react";

function OnChangeEventHandleDemo(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");


    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeQuantity(event){
        setQuantity(event.target.value);
    }

    function handleChangeComment(event){
        setComment(event.target.value);
    }

    function handleChangePayment(event){
        setPayment(event.target.value);
    }

    function handleChangeShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div className="container">
            <input type="text" value={name} onChange={handleChangeName} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleChangeQuantity} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleChangeComment} rows={5} cols={50}/>
            <p>Comment: {comment}</p>

            <div class="form-group col-md-4">
                <select id="payment" value={payment} onChange={handleChangePayment} class="form-control">
                    <option selected>Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select> 
                <p>Payment: {payment}</p>
            </div>
            

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" 
                    checked={shipping === "Pick Up"} 
                    onChange={handleChangeShipping}
                    value="Pick Up" />
                <label class="form-check-label" for="inlineRadio1">Pick Up</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions"
                        checked={shipping === "Delivery"}
                        onChange={handleChangeShipping}
                        value="Delivery" />
                <label class="form-check-label" for="inlineRadio2">Delivery</label>
            </div>
            <p>Shipping: {shipping}</p>
        </div>
    );

}

export default OnChangeEventHandleDemo;