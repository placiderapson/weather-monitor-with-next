import React, { useState } from 'react';
import '../../styles/Search.scss';

const Search = () => {
    const [ location, setLocation ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleOnChange = (e) => {
        setLocation(e.target.value);
    }
    
    const handleOnClick = (e) => {
        e.preventDefault();
        location.trim() ? setMessage(`Weather Forecast For ${location.toUpperCase()} Could Not Be Found`) : null;
        location.trim() ? setTimeout(()=> {
            setMessage('')
        }, 5000) : null;
    }

    return(
        <div className="Search">
            <input type="text" placeholder="Search a new place" className="Search__input" onChange={ handleOnChange }/>
            <button className="Search__btn" onClick={ handleOnClick }>Search</button>
            <p className="Search__message">{ message }</p>
        </div>
    );
};

export default Search;