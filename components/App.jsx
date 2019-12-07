import React from 'react';
import Search from './shared/Search';
import Title from './shared/Title';
import Location from './shared/Location';
import Today from './shared/Today';
import Temperature from './shared/Temperature';
import City from './shared/City';
import { AppData } from './data/App';
import '../styles/App.scss';

export const AppContext = React.createContext();

const App = () => {
    return(
        <AppContext.Provider value={AppData}>
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