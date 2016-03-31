import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const homeClass = location.pathname === '/' ? 'bg-home' : '';
    const quotesClass = location.pathname.match(/^\/quotes/) ? 'text-black bg-success' : '';
    const weatherClass = location.pathname.match(/^\/weather/) ? 'text-black bg-info' : '';

    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className={`sidebar-brand ${homeClass}`}>
            <IndexLink to="/">Showcase</IndexLink>
          </li>
          <li className={quotesClass}>
            <Link to="quotes">
              <i className="fa fa-quote-left"></i>
              Quotes
            </Link>
          </li>
          <li className={weatherClass}>
            <Link to="weather">
              <i className="fa fa-cloud"></i>
              Weather
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  location: React.PropTypes.object.isRequired,
};
