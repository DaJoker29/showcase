import * as WeatherActions from "../actions/WeatherActions";
import WeatherStore from "../stores/WeatherStore";
import React from "react";

export default class Weather extends React.Component {
    constructor() {
        super();
        this.getWeather = this.getWeather.bind(this);
        this.setFetching = this.setFetching.bind(this);
        this.toggleTemp = this.toggleTemp.bind(this);
        this.state = {
            fetching: false,
            tempFlag: true
        }
    }

    componentWillMount() {
        WeatherStore.on('received', this.getWeather);
        WeatherStore.on('fetching', this.setFetching);
        document.body.classList.add('bg-info');
    }

    componentDidMount() {
        WeatherActions.fetchWeather();
    }

    componentWillUnmount() {
        WeatherStore.removeListener('received', this.getWeather);
        WeatherStore.removeListener('fetching', this.setFetching);
        document.body.classList.remove('bg-info');
    }

    getWeather() {
       this.setState({
            weather: WeatherStore.getWeather(),
            fetching: false
        })
    }

    setFetching() {
        this.setState({
            fetching: true
        })
    }

    toggleTemp() {
        this.setState({
            tempFlag: !this.state.tempFlag
        })
    }

     render() {
        const { weather = {}, fetching, tempFlag } = this.state;
        const loading = !fetching || weather.icon; ;
        const tempString = tempFlag ? weather.cTemp : weather.fTemp;
        const tempLabel = tempFlag ? 'C' : 'F';

        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <p class="lead">This application uses the users browser to determine their geolocation and from that return the current weather via <a href="http://openweathermap.org" target="_blank">Open Weather Map API</a>. Another Free Code Camp challenge.
                        </p>
                    </div>
                    <div id="content">
                        <img src="cube.gif" alt="" className={`center-block ${ loading ? 'hide' : ''}`}/>
                        <div class={`text-center ${ loading ? '' : 'hide'}`}>
                            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} className="center-block"/>
                            <h3 class="cursor" onClick={this.toggleTemp.bind(this)}>
                                {tempString}<sup>o</sup>{tempLabel}
                            </h3>
                            <div>
                                <p class="lead">{weather.description}</p>
                                <span class="label label-info">
                                    { `Wind: ${weather.wind} m/s`}
                                </span>
                                <span class="label label-info">
                                    { `Humidity: ${weather.humidity}%`}
                                </span>
                            </div>
                            <p class="text-right text-muted">
                                { `${weather.name}, ${weather.country}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}