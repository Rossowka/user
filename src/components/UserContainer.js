import React, { useEffect, useState } from 'react';
import UserSearch from './UserSearch';

function UserContainer() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <>
            <h2>User List</h2>
            {loading &&
                <div>A moment please...</div>
                }
            {error && (
                <div>{`Data got lost on it's way... ${error}`}</div>
                )}
            {data &&
            // makes sure data gets fetched before rendering the component
                <UserSearch data={data} />
                }
        </>
    )
}

export default UserContainer;