import React from "react";
import { IndexLink, Link } from "react-router";

export default class Sidebar extends React.Component {
    render() {
        const { location } = this.props;
        const quotesClass = location.pathname.match(/^\/quotes/) ? "active" : "";

        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li class="sidebar-brand">
                        <IndexLink to="/">Portfolio</IndexLink>
                    </li>
                <li class={quotesClass} ><Link to="quotes">Random Quotes</Link></li>
                </ul>
            </div>
        );
    }
}