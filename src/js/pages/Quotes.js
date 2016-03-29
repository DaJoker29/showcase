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
        document.body.classList.add('bg-success');
    }

    componentDidMount() {
        QuoteActions.fetchQuote();
    }

    componentWillUnmount() {
        QuoteStore.removeListener('received', this.getQuote);
        QuoteStore.removeListener('fetching', this.setFetching);
        document.body.classList.remove('bg-success');
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
        const { text, author } = quote;

        return (
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron">
                        <p class="lead">This is an application I built as part of the <a href="http://www.freecodecamp.com" target="_blank">Free Code Camp</a> Front End Development Course. It takes quotes from an API (<a href="http://quotesondesign.com" target="_blank">Quotes on Design</a>) and displays them, allowing the user to tweet their favorite quotes. A simple AJAX design.
                        </p>
                    </div>
                    <div id="content">
                        <Quote text={text} author={author} fetching={fetching}></Quote>
                    </div>
                </div>
            </div>
        );
    }
}