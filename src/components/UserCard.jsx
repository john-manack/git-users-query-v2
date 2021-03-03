import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = (props) => {
    const { user } = props;
    return (
        <li className="user-card">
            <Link to={`/user/${user.login}`}>
                <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="avatar"></img>
                <p>{user.name}</p>
            </Link>
        </li>
    )
}

export default UserCard;