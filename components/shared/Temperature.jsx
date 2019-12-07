import React from 'react';
import '../../styles/Temperature.scss';

const Temperature = () => {
    return(
        <div className="Temperature">
            <p className="Temperature__value">28</p>
            <p className="Temperature__unit"><sup> &#8451;</sup></p>
        </div>
    );
};

export default Temperature;