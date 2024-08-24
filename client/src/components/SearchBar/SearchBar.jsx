import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions/actions';

const SearchBar = () => {

    const dispatch = useDispatch();

    const [ searchTerm, setSearchTerm ] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            dispatch(getDogByName(searchTerm));
        }
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search for a dog...'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;