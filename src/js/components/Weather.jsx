import React from 'react';

export default class Weather extends React.Component {

  constructor() {
    super();
    this.toggleTemp = this.toggleTemp.bind(this);
    this.state = {
      tempFlag: true,
    };
  }

  toggleTemp() {
    this.setState({
      tempFlag: !this.state.tempFlag,
    });
  }

  render() {
    const { loading, weather } = this.props;
    const { tempFlag } = this.state;
    const tempLabel = tempFlag ? 'C' : 'F';
    const tempString = tempFlag ? weather.cTemp : weather.fTemp;

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <p className="lead">
              This application uses the users browser to determine their geolocation and from that return the current weather via <a href="http://openweathermap.org" target="_blank">Open Weather Map API</a>. Another Free Code Camp challenge.
            </p>
          </div>

          <div id="content">
            <div className="text-center">
              <i className={`hide fa fa-spinner fa-spin fa-5x ${loading ? 'show-inline' : ''}`}></i>
            </div>

            <div className={`text-center hide ${loading ? '' : 'show'}`}>
              <img src={`http://openweathermap.org/img/w/${weather.icon || '000'}.png`} className="center-block" />
              <h3 className="cursor" onClick={this.toggleTemp}>
                {tempString}<sup>o</sup>{tempLabel}
              </h3>
              <div>
                <p className="lead">
                  {weather.description}
                </p>
                <span className="label label-info">
                  { `Wind: ${weather.wind} m/s`}
                </span>
                <span className="label label-info">
                  { `Humidity: ${weather.humidity}%`}
                </span>
              </div>
              <p className="text-right text-muted">
                { `${weather.name}, ${weather.country}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  weather: React.PropTypes.object.isRequired,
};
