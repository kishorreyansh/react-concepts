function ProfilePic(){
    const url = '../src/assets/react.svg';

    const handleClick = () => {
        console.log("Clicked");
    }

    const handleClickImage = (e) => {
        console.log("You Clicked Image");
        e.target.style.display = "none";
    }

    return(
        <>
            <img src={url} onClick={handleClick} />
            <img src={url} onClick={(e) => handleClickImage(e)} />
        </>
        
    )
}

export default ProfilePic;