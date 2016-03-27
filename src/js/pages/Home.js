import React from "react";

export default class Home extends React.Component {
     render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <h2>Welcome!</h2>
                        <p class="lead">This is the home page.</p>
                    </div>
                    <div id="content"></div>
                </div>
            </div>
        );
    }
}