import React from 'react';

const Day = ({ weather }) => {
    // console.log(weather);
    return (
        <div>
            <h3>Max temp: {weather.temp_max}</h3>
            <h3>Min temp: {weather.temp_min}</h3>
        </div>
    );
};

export default Day;
