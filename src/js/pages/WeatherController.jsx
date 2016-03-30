import * as WeatherActions from '../actions/WeatherActions';
import WeatherStore from '../stores/WeatherStore';
import React from 'react';
import Weather from '../components/Weather';

export default class WeatherController extends React.Component {
  constructor() {
    super();
    this.getWeather = this.getWeather.bind(this);
    this.setFetching = this.setFetching.bind(this);
    this.state = {
      fetching: false,
    };
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
    });
  }

  setFetching() {
    this.setState({
      fetching: true
    });
  }

  render() {
    const { weather = {}, fetching } = this.state;
    const loading = fetching || !weather.icon;

    return (
            <Weather loading={loading} weather={weather} />
        );
  }
}
