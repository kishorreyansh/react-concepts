import profilePic from '../../assets/Kishor.jpg'
import './Card.css'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile pic" className="card-img" ></img>
            <h1 className="card-title">Kishor</h1>
            <p className="card-text">I am Learning React</p>
        </div>
    );
}

export default Card;