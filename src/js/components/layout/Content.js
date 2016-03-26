import React from "react";

export default class Content extends React.Component {
    render() {
        return (
            <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="jumbotron">
                                <h2>App Title</h2>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quisquam! Excepturi laudantium sequi quo, nisi possimus veritatis labore ipsa ipsum. Voluptas similique magnam tempore, optio sit perspiciatis quis praesentium quaerat.</p>
                                <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
                            </div>
                            <main id="content">
                                <h2>Something</h2>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}