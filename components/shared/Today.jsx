import React from 'react';
import '../../styles/Today.scss';

const Today = () => {
    return(
        <div className="Today">
            <h2 className="Today__title">Today</h2>
            <div className="Today__container">
                <p className="Today__date">Sat, 3 Aug</p>
                <p className="Today__forecast">Cloudy</p>
            </div>
        </div>
    );
};

export default Today;