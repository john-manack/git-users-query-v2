import './UserCard.css'

const UserCard = (props) => {
    const { user } = props;
    return (
        <li>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="avatar"></img>
            <p>{user.name}</p>
        </li>
    )
}

export default UserCard;