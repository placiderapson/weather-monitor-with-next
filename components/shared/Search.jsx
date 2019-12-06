import React from 'react';
import '../../styles/Search.scss';

const Search = () => {
    return(
        <div className="Search">
            <input type="text" placeholder="Search a new place" className="Search__input"/>
            <button className="Search__btn">Search</button>
        </div>
    );
};

export default Search;