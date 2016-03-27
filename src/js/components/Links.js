import React from "react";
import { IndexLink, Link } from "react-router";

export default class Links extends React.Component {
    render() {
        const { ulClass, location } = this.props;
        const indexClass = location.pathname === "/" ? "active" : "";
        const quotesClass = location.pathname.match(/^\/quotes/) ? "active" : "";
        const weatherClass = location.pathname.match(/^\/weather/) ? "active" : "";
        const wikiClass = location.pathname.match(/^\/wiki/) ? "active" : "";
        const scrambleClass = location.pathname.match(/^\/scramble/) ? "active" : "";

        return (
            <ul class={ulClass}>
                <li class={indexClass} ><IndexLink to="/">Overview</IndexLink></li>
                <li class={quotesClass} ><Link to="quotes">Random Quotes</Link></li>
                <li class={weatherClass} ><Link to="#">Local Weather</Link></li>
                <li class={wikiClass} ><Link to="#">Wikipedia Viewer</Link></li>
                <li class={scrambleClass} ><Link to="#">Scramble</Link></li>
            </ul>
        );
    }
}