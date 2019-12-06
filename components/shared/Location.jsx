import React from 'react';
import '../../styles/Location.scss';

const Location = () => {
    return(
        <div className="Location">
            <div className="Location__card">
                <div className="Location__landmark-one Location__landmark--active" />
                <div className="Location__country-city">
                    <p>Berlin, Germany</p>
                </div>
            </div>
            <div className="Location__card">
                <div className="Location__landmark-two Location__landmark--inactive" />
                <div className="Location__country-city">
                    <p>Paris, France</p>
                </div>
            </div>
            <div className="Location__card">
                <div className="Location__landmark-three Location__landmark--inactive" />
                <div className="Location__country-city">
                    <p>New York, USA</p>
                </div>
            </div>
        </div>
    );
};

export default Location;