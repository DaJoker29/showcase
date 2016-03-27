import React from "react";
import Links from "../Links";

export default class Sidebar extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <div id="sidebar-wrapper">
                <Links ulClass="sidebar-nav" location={location}></Links>
            </div>
        );
    }
}