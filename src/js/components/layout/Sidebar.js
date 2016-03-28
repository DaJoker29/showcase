import React from "react";
import { IndexLink, Link } from "react-router";

export default class Sidebar extends React.Component {
    render() {
        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "bg-home" : "";
        const quotesClass = location.pathname.match(/^\/quotes/) ? "text-black bg-success" : "";

        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li class={`sidebar-brand ${homeClass}`}>
                        <IndexLink to="/">Showcase</IndexLink>
                    </li>
                <li class={quotesClass}><Link to="quotes"><i className="fa fa-quote-left"></i> Quotes</Link></li>
                </ul>
            </div>
        );
    }
}