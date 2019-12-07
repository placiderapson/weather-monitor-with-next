import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Today.scss';

const Today = () => {
    const context = useContext(AppContext);

    return(
        <div className="Today">
            <h2 className="Today__title">Today</h2>
            <div className="Today__container">
                <p className="Today__date">{ context.today }</p>
                <p className="Today__forecast">{ context.weatherForecast[0] }</p>
            </div>
        </div>
    );
};

export default Today;