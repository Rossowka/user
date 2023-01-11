import React, { useState } from 'react';
import UserCard from './UserCard';

function User({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(user.username);
    }

    return (
        <>
            <li onClick={handleClick}>
                #{user.id} | {user.username} | { user.name } | { user.email }
            </li>
            { isOpen ?
                <UserCard isOpen={isOpen} onClose={handleClick} user={user}/>
                : false
                }
        </>
    )
}

export default User;