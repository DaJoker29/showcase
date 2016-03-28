import * as QuoteActions from "../actions/QuoteActions";
import Quote from "../components/Quote";
import QuoteStore from "../stores/QuoteStore";
import React from "react";

export default class Quotes extends React.Component {
    constructor() {
        super();
        this.getQuote = this.getQuote.bind(this);
        this.setFetching = this.setFetching.bind(this);
        this.state = {
            fetching: false
        }
    }

    componentWillMount() {
        QuoteStore.on('received', this.getQuote);
        QuoteStore.on('fetching', this.setFetching);
    }

    componentDidMount() {
        QuoteActions.fetchQuote();
    }

    componentWillUnmount() {
        QuoteStore.removeListener('received', this.getQuote);
        QuoteStore.removeListener('fetching', this.setFetching);
    }

    getQuote() {
       this.setState({
            quote: QuoteStore.getQuote(),
            fetching: false
        })
    }

    setFetching() {
        this.setState({
            fetching: true
        })
    }

     render() {
        const { quote = {}, fetching } = this.state;

        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <h2>Quote Generator</h2>
                        <p class="lead">This page builds quotes.</p>
                    </div>
                    <div id="content">
                        <Quote text={quote.text} author={quote.author} fetching={fetching}></Quote>
                    </div>
                </div>
            </div>
        );
    }
}