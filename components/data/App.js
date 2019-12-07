import { date } from '../utils/date';

export const initialState = {
    today: date,
    currentWeatherForecast: 'cloudy',
    weatherForecast: ['cloudy', 'sunny', 'rainy'],
    currentCity: 'Berlin, Germany',
    cities: ['Berlin, Germany', 'Paris, France', 'New York, USA']
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE-LOCATION-AND-WEATHER-FORECAST':
            return {
                ...state,
                currentCity: action.city,
                currentWeatherForecast: action.weather
            }
        default:
            return state;
    };
};