import React from "react";

import Quote from "../components/Quote";
import QuotesStore from "../stores/QuotesStore";

export default class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: QuotesStore.getQuote()
        }
    }

     render() {
        const { text, author } = this.state.quote;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <h2>Quote Generator</h2>
                        <p class="lead">This page builds quotes.</p>
                    </div>
                    <div id="content">
                        <Quote text={text} author={author}></Quote>
                    </div>
                </div>
            </div>
        );
    }
}