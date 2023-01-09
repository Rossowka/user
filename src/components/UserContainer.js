import React, { useEffect, useState } from 'react';

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
            .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>

        </>
    )
}

export default UserContainer;