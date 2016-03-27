import React from "react";

export default class Quotes extends React.Component {
     render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <h2>Quote Generator</h2>
                        <p class="lead">This page builds quotes.</p>
                    </div>
                    <div id="content">
                        <h2>Yes, it does.</h2>
                    </div>
                </div>
            </div>
        );
    }
}