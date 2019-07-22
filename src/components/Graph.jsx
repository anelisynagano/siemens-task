import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ list }) => {
    // const handleClick = (e) => {
    //     // console.log(e);
    //     const hour = list.find(hours => hours.dt_txt === e.points[0].x);
    //     onClick(hour);
    // }
    return (
        <div>
            <Plot
                data={[
                    {
                        x: list.map(hourly => hourly.dt_txt),
                        y: list.map(hourly => hourly.main.temp),
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'red' },
                    },
                ]}
                layout={{ width: 800, height: 500, title: 'Weather' }}
                // onClick={handleClick}
            />
        </div>
    );
};

export default Graph;