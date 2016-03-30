import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    const { location } = this.props;
    const indexClass = location.pathname === '/' ? 'active' : '';
    const quotesClass = location.pathname.match(/^\/quotes/) ? 'active' : '';
    const weatherClass = location.pathname.match(/^\/weather/) ? 'active' : '';

    return (
            <nav className="navbar navbar-default visible-xs">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle Navigation</span>
                            <i className="fa fa-bars"></i>
                        </button>
                        <IndexLink class="navbar-brand" to="/">Portfolio</IndexLink>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className={quotesClass} >
                                <Link to="quotes">
                                    <i className="fa fa-quote-left fa-fw"></i> Quotes
                                </Link>
                            </li>
                            <li className={weatherClass} >
                                <Link to="weather">
                                    <i className="fa fa-cloud fa-fw"></i> Weather
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
  }
}
