import React from 'react';
import Search from './shared/Search';
import Title from './shared/Title';
import Location from './shared/Location';
import '../styles/App.scss';

const App = () => {
    return(
        <div className="App">
           <div className="App__left-section">
               <Search />
               <Title />
               <Location />
           </div>
           <div className="App__right-section"></div>
        </div>
    )
}

export default App;