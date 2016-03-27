import React from "react";
import { Link } from "react-router";
import Links from "../Links";

export default class Nav extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { location } = this.props;

        return (
            <nav class="navbar navbar-default visible-xs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span class="sr-only">Toggle Navigation</span>
                            <i class="fa fa-bars"></i>
                        </button>
                        <div className="navbar-brand">Portfolio</div>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar-collapse">
                        <Links ulClass="nav navbar-nav" location={location}/>
                    </div>
                </div>
            </nav>
        );
    }
}