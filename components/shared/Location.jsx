import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import '../../styles/Location.scss';

const Location = () => {
    const context = useContext(AppContext);

    const [ locOneStyle, setLocOneStyle ] = useState('active');
    const [ locTwoStyle, setLocTwoStyle ] = useState('inactive');
    const [ locThreeStyle, setLocThreeStyle ] = useState('inactive');

    const setCurrentCity = (city) => {
        switch(city){
            case 'berlin, germany':
                setLocOneStyle('active');
                setLocTwoStyle('inactive');
                setLocThreeStyle('inactive');

                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  temperature: context.state.temperature[0],
                  weather: context.state.weatherForecast[0]
                });
                break;

            case 'paris, france':
                setLocOneStyle('inactive');
                setLocTwoStyle('active');
                setLocThreeStyle('inactive');

                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  temperature: context.state.temperature[1],
                  weather: context.state.weatherForecast[1]
                });
                break;

            case 'new york, usa':
                setLocOneStyle('inactive');
                setLocTwoStyle('inactive');
                setLocThreeStyle('active');
                
                context.dispatch({
                  type: 'CHANGE-LOCATION-AND-WEATHER-FORECAST',
                  city: city,
                  temperature: context.state.temperature[2],
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
                <div className={`Location__landmark-one Location__landmark--${locOneStyle}`} />
                <div className="Location__country-city">
                    <p>{ context.state.cities[0] }</p>
                </div>
            </div>
            <div className="Location__card" onClick={()=>{setCurrentCity(context.state.cities[1])}}>
                <div className={`Location__landmark-two Location__landmark--${locTwoStyle}`} />
                <div className="Location__country-city">
                <p>{ context.state.cities[1] }</p>
                </div>
            </div>
            <div className="Location__card" onClick={()=>{setCurrentCity(context.state.cities[2])}}>
                <div className={`Location__landmark-three Location__landmark--${locThreeStyle}`} />
                <div className="Location__country-city">
                <p>{ context.state.cities[2] }</p>
                </div>
            </div>
        </div>
    );
};

export default Location;