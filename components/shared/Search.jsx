import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Search.scss';

const Search = () => {
    const context = useContext(AppContext);

    const [ location, setLocation ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleOnChange = (e) => {
        setLocation(e.target.value);
    }
    
    const handleOnClick = e => {
      e.preventDefault();
      let city;
      location.trim()
        ? (city = context.state.cities.filter(
            city => city === location.toLowerCase()
          ))
        : null;
      location.trim()
        ? setMessage(
            city.length
              ? `Weather Forecast Found. Click On ${city[0].toUpperCase()} Below`
              : `Weather Forecast For ${location.toUpperCase()} Could Not Be Found`
          )
        : null;

      location.trim()
        ? setTimeout(() => {
            setMessage("");
          }, 5000)
        : null;
    };

    return(
        <div className="Search">
            <input type="text" placeholder="Search a new place. Ex: city, country" className="Search__input" onChange={ handleOnChange }/>
            <button className="Search__btn" onClick={ handleOnClick }>Search</button>
            <p className="Search__message">{ message }</p>
        </div>
    );
};

export default Search;