import React, { Component } from 'react';
import Day from './Day';
import Graph from './Graph';
import Tabs from './Tabs';
import Input from './Input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            currentWeather: {},
            isLoading: true,
            list: [],
        };
    }

    componentDidMount = () => {
        this.getWeatherInfo();
    }

    getWeatherInfo = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=Lisbon,PRT&units=metric&appid=00b3a5ed16ed1463a44332935c9a8806')
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                this.setState({
                    city: data.city.name,
                    currentWeather: data.list[0].main,
                    isLoading: false,
                    list: data.list,
                });
            });
    }

    handleWeatherClick = (weather) => {
        // console.log(weather.main);
        this.setState({ currentWeather: weather.main });
    }

    render() {
        const { currentWeather, city, isLoading, list } = this.state;
        if (isLoading) return <div>Loading......</div>;
        return (
            <div>
                <Graph list={list} />
                <h2>
                    Weather in {city}
                </h2>
                <div className="home">
                    <div>
                        <Input />
                    </div>
                    <div className="tabs">
                        <Tabs list={list} onClick={this.handleWeatherClick} />
                    </div>
                    <div className="weather">
                        <Day weather={currentWeather} list={list} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
