import PropTypes, { bool } from 'prop-types';
function UserGreeting(props){

    const welcomemessage = <h2>Welcome, {props.username}</h2>
    const promptmessage = <h2>Please Continue to Login</h2>

    return(props.isLoggedIn ? welcomemessage : promptmessage);
}

UserGreeting.propTypes = {
    isLoggedIn: bool,
    username: String
}

UserGreeting.defaultTypes = {
    isLoogedIn: false,
    username: "Default User"
}

export default UserGreeting;