import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };
    }

    componentDidMount() {
        const name = this.props.name;
        const apiKey = 'apiKeyId';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;
        axios.get(url)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    const weather = res.data;
                    this.setState({ weather });
                }
            });
    }

    componentDidUpdate() {
        const name = this.props.name;
        const apiKey = 'apiKeyId';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;
        axios.get(url)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    const weather = res.data;
                    this.setState({ weather });
                }
            });
    }

    render() {
        const name = this.props.name;
        const weather = this.state.weather;
        if (weather.main) {
            return (<>
                <h1>{name}</h1>
                <div>{weather.main.temp}</div>
                <div>{weather.main.feels_like}</div>
                </>);
        }
        return <div>Loading...</div>
    }
}

export default Weather;