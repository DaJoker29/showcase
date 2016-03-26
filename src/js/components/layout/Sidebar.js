import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <a href="#">
                            Portfolio
                        </a>
                    </li>
                    <li><a href="#">Random Quotes</a></li>
                    <li><a href="#">Local Weather</a></li>
                    <li><a href="#">Wikipedia Viewer</a></li>
                    <li><a href="#">Scramble</a></li>
                </ul>
            </div>
        );
    }
}