import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { location } = this.props;
        const indexClass = location.pathname === "/" ? "active" : "";
        const quotesClass = location.pathname.match(/^\/quotes/) ? "active" : "";

        return (
            <nav class="navbar navbar-default visible-xs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span class="sr-only">Toggle Navigation</span>
                            <i class="fa fa-bars"></i>
                        </button>
                        <IndexLink class="navbar-brand" to="/">Portfolio</IndexLink>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li class={quotesClass} ><Link to="quotes">
                            <i className="fa fa-quote-left fa-fw"></i> Quotes</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}