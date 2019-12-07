import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/City.scss';

const City = () => {
    const context = useContext(AppContext);

    return(
        <div className="City">
            <p>{ context.state.currentCity }</p>
        </div>
    );
};

export default City;