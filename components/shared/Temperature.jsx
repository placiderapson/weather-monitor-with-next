import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../../styles/Temperature.scss';

const Temperature = () => {
  const context = useContext(AppContext);

  return (
    <div className="Temperature">
      <p className="Temperature__value">{context.state.currentTemperature} C</p>
    </div>
  );
};

export default Temperature;
