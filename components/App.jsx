import React from 'react';
import Search from './shared/Search';
import Title from './shared/Title';
import Location from './shared/Location';
import Today from './shared/Today';
import Temperature from './shared/Temperature';
import City from './shared/City';
import '../styles/App.scss';

const App = () => {
    return(
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
    )
}

export default App;