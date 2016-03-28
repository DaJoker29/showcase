import React from "react";

export default class Home extends React.Component {
     render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <h2>Howdy!</h2>
                        <p class="lead">This is a small collection of web applications of I've built over the years.</p>
                        <p className="lead">If you'd like to contact me, please visit <a href="http://dj.zerodaedalus.com" target="_blank">my website</a>.</p>
                    </div>
                    <div id="content"></div>
                </div>
            </div>
        );
    }
}