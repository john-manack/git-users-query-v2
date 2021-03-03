import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {
    // Pull username from params
    const { username } = useParams();
    console.log('USERNAME:', username)

    // Pull userArray from props
    const { userArray } = props;
    console.log('USER ARRAY:', userArray)

    // Pull user object from userArray
    let user = userArray.find(i => i.login === username);
    console.log('USER:', user);

    // Setting state in a functional component
    const [repoList, setRepoList] =  useState([]);
    useEffect(() => {
        (async () => {
            const url = `https://api.github.com/users/${username}/repos`;
            const userInfo = await fetch(url)
                .then(response => response.json());
            setRepoList(userInfo);
        })();
    }, [setRepoList, username]);

    return(
        <>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="avatar"></img>
            <p>{user.bio}</p>
            <h3>Repositories</h3>
            {repoList.map(repo => 
                <p key={repo.id}>{repo.name}</p>
            )}
        </>
    )
}

export default UserProfile;