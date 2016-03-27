import React from "react";

import Nav from "../components/layout/Nav";
import Sidebar from "../components/layout/Sidebar";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <div>
                <Nav location={location}/>
                <div id="wrapper">
                    <Sidebar location={location}/>
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="row">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}