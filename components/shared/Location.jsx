import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Location.scss';

const Location = () => {
    const context = useContext(AppContext);

    return(
        <div className="Location">
            <div className="Location__card">
                <div className="Location__landmark-one Location__landmark--active" />
                <div className="Location__country-city">
                    <p>{ context.cities[0] }</p>
                </div>
            </div>
            <div className="Location__card">
                <div className="Location__landmark-two Location__landmark--inactive" />
                <div className="Location__country-city">
                <p>{ context.cities[1] }</p>
                </div>
            </div>
            <div className="Location__card">
                <div className="Location__landmark-three Location__landmark--inactive" />
                <div className="Location__country-city">
                <p>{ context.cities[2] }</p>
                </div>
            </div>
        </div>
    );
};

export default Location;