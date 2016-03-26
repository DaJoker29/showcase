import React from "react";

export default class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default visible-xs">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span class="sr-only">Toggle Navigation</span>
                            <i class="fa fa-bars"></i>
                        </button>
                        <a href="#" class="navbar-brand">Portfolio</a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="#">Random Quotes</a></li>
                            <li><a href="#">Local Weather</a></li>
                            <li><a href="#">Wikipedia Viewer</a></li>
                            <li><a href="#">Scramble</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}