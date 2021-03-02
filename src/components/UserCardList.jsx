import UserCard from './UserCard';

const UserCardList = (props) => {
    const { userArray } = props;
    return (
        <ul>
            {userArray.map(user => {
                return <UserCard user={user} key={user.id}/>
            })}
        </ul>
    );
}

export default UserCardList;