import React, { useState, useContext } from 'react';
import { GetLatLngByAddress } from 'geocoder-free';
import axios from 'axios';
import { AppContext } from '../App';
import { WEATHER_API_KEY, WEATHER_API_ENDPOINT } from '../../env';
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

    location.trim()
      ? GetLatLngByAddress(location).then(res => {
          !res.length
            ? setStyle('Search__error-message') &
              setMessage(
                `Weather Forecast For ${location.toUpperCase()} Could Not Be Found`
              )
            : axios({
                method: 'GET',
                url: `${WEATHER_API_ENDPOINT}${WEATHER_API_KEY}${res[0]},${res[1]}`
              })
                .then(res => {
                  setStyle('Search__success-message') &
                    setMessage(
                      `Weather Forecast For ${location.toUpperCase()} Has Been Found`
                    );
                  console.log(
                    `Temperature: ${res.data.currently.temperature}. Weather: ${res.data.currently.summary}`
                  );
                })
                .catch(err => {
                  console.log(err.message);
                });
        })
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
