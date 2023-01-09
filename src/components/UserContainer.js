import React, { useEffect, useState } from 'react';
import UserList from './UserList';

function UserContainer() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // https://jsonplaceholder.typicode.com/users
            .then((response) => {
                if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
              return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h2>User Container</h2>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`Data got lost on it's way... ${error}`}</div>
            )}
            <UserList users={data} />
        </>
    )
}

export default UserContainer;