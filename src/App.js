import './App.css';
import Weather from "./Weather";
import React from 'react';

class App extends React.Component {
    currentCityName = '';

    constructor(props) {
        super(props);
        this.state = {
            name: 'London',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({name: this.currentCityName});
    }

    handleChange = (event) => {
        this.currentCityName = event.target.value;
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>Search:</label>
                    <input type="text" placeholder="London" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                    <Weather name={this.state.name} />
                </form>
            </div>
        );
    }
}

export default App;
