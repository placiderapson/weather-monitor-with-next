import React, { useReducer } from 'react';
import Search from './shared/Search';
import Title from './shared/Title';
import Location from './shared/Location';
import Today from './shared/Today';
import Temperature from './shared/Temperature';
import City from './shared/City';
import { reducer, initialState } from './data/App';
import '../styles/App.scss';

export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="App__left-section">
          <Search />
          <Title />
          <Location />
        </div>
        <div className="App__right-section">
          <Today />
          <Temperature />
          <City />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
