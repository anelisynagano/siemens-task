import React from 'react';

const Tab = ({ hourly, onClick }) => {
    // console.log(hourly);
    return (
        <div role="presentation" onClick={() => onClick(hourly)}>{new Date(hourly.dt_txt).toLocaleString()}</div>
    );
};

export default Tab;
