import React from 'react';
import Tab from './Tab';

const Tabs = ({ list, onClick }) => {
    return (
        <div className="tabs">
            {/* <Temperature /> */}
            {/* <Windspeed />
            <Humidity /> */}
            {list.map(hourly => <Tab hourly={hourly} onClick={onClick} key={hourly.dt_txt} />)}
        </div>
    );
};

export default Tabs;
