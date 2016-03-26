import React from "react";

import Nav from "../components/layout/Nav";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";

export default class Layout extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Nav />
                <div id="wrapper">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        );
    }
}