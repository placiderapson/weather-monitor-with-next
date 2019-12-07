import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Location.scss';

const Location = () => {
    const context = useContext(AppContext);

    const setCurrentCity = (city) => {
        switch(city){
            case 'Berlin, Germany':
                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  weather: context.state.weatherForecast[0]
                });
                break;

            case 'Paris, France':
                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  weather: context.state.weatherForecast[1]
                });
                break;

            case 'New York, USA':
                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  weather: context.state.weatherForecast[2]
                });
                break;
            
            default:
                return null;
            
        }
    }

    return(
        <div className="Location">
            <div className="Location__card" onClick={()=>{setCurrentCity(context.state.cities[0])}}>
                <div className="Location__landmark-one Location__landmark--active" />
                <div className="Location__country-city">
                    <p>{ context.state.cities[0] }</p>
                </div>
            </div>
            <div className="Location__card" onClick={()=>{setCurrentCity(context.state.cities[1])}}>
                <div className="Location__landmark-two Location__landmark--inactive" />
                <div className="Location__country-city">
                <p>{ context.state.cities[1] }</p>
                </div>
            </div>
            <div className="Location__card" onClick={()=>{setCurrentCity(context.state.cities[2])}}>
                <div className="Location__landmark-three Location__landmark--inactive" />
                <div className="Location__country-city">
                <p>{ context.state.cities[2] }</p>
                </div>
            </div>
        </div>
    );
};

export default Location;