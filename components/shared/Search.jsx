import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Search.scss';

const Search = () => {
  const context = useContext(AppContext);

  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState('');

  const handleOnChange = e => {
    setLocation(e.target.value);
  };

  const handleOnClick = e => {
    e.preventDefault();
    let city;
    location.trim()
      ? (city = context.state.cities.filter(
          city => city === location.toLowerCase()
        ))
      : null;
    location.trim()
      ? city.length
        ? setStyle('Search__success-message') &
          setMessage(
            `Weather Forecast Found. Click On ${city[0].toUpperCase()} Below`
          )
        : setStyle('Search__error-message') &
          setMessage(
            `Weather Forecast For ${location.toUpperCase()} Could Not Be Found`
          )
      : null;

    location.trim()
      ? setTimeout(() => {
          setMessage('');
        }, 5000)
      : null;
  };

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search a new place. Ex: city, country"
        className="Search__input"
        onChange={handleOnChange}
      />
      <button className="Search__btn" onClick={handleOnClick}>
        Search
      </button>
      <p className={style}>{message}</p>
    </div>
  );
};

export default Search;
