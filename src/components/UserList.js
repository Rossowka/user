import React from 'react';

function UserList({ users }) {
    return (
        <ul>
            {users &&
                users.map(({ id, username }) => (
                    <li key={id}>
                        #{id} | {username}
                    </li>
                ))}
        </ul>
    )
}

export default UserList;