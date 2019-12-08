import { date } from '../utils/date';

export const initialState = {
    today: date,
    temperature: [15, 30, 10],
    currentTemperature: 15,
    weatherForecast: ['cloudy', 'rainy', 'sunny'],
    currentWeatherForecast: 'cloudy',
    cities: ['berlin, germany', 'paris, france', 'new york, usa'],
    currentCity: 'berlin, germany'
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE-LOCATION-AND-WEATHER-FORECAST':
            return {
                ...state,
                currentCity: action.city,
                currentTemperature: action.temperature,
                currentWeatherForecast: action.weather
            }
        default:
            return state;
    };
};