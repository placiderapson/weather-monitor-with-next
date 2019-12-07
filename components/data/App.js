import { date } from '../utils/date';

export const initialState = {
    today: date,
    weatherForecast: ['cloudy', 'sunny', 'rainy'],
    currentCity: 'Berlin, Germany',
    cities: ['Berlin, Germany', 'Paris, France', 'New York, USA']
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE-LOCATION':
            return {
                ...state,
                currentCity: action.payload
            }
        default:
            return state;
    };
};