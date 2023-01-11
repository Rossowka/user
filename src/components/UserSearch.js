import React, { useState } from 'react';
import UserList from './UserList';

function UserSearch({ data, handleClick }) {
    const [searchValue, setSearchValue] = useState('');
    const [filterOn, setFilterOn] = useState(false);

    const handleKeyDown = (event) => {
        if (searchValue && event.key === "Enter") {
          resetSearch();
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        filterData();
    }

    const resetSearch = () => {
        setSearchValue('');
        setFilterOn(false);
    }

    const filterData = () => {
        setFilterOn(true);
    }

    const filteredData = data.filter((user) => {
        if (searchValue) {
            return (
                user.username.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                user.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                user.email.toLowerCase().includes(searchValue.toLocaleLowerCase())
            );
        }
        return user;
    })

    return (
        <>
            <input type='text' placeholder='search' onKeyDown={handleKeyDown} onChange={handleChange} value={searchValue}/>
            {filterOn ?
                <button onClick={resetSearch}>X</button>
                : false
            }
            <UserList users={filteredData} />
        </>
    )
}

export default UserSearch;