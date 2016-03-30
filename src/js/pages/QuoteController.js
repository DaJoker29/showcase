import * as QuoteActions from "../actions/QuoteActions";
import Quote from "../components/Quote";
import QuoteStore from "../stores/QuoteStore";
import React from "react";

export default class QuoteController extends React.Component {
    constructor() {
        super();
        this.setQuote = this.setQuote.bind(this);
        this.setFetching = this.setFetching.bind(this);
        this.state = {
            fetching: false
        }
    }

    componentWillMount() {
        QuoteStore.on('received', this.setQuote);
        QuoteStore.on('fetching', this.setFetching);
        document.body.classList.add('bg-success');
    }

    componentDidMount() {
        QuoteActions.fetchQuote();
    }

    componentWillUnmount() {
        QuoteStore.removeListener('received', this.setQuote);
        QuoteStore.removeListener('fetching', this.setFetching);
        document.body.classList.remove('bg-success');
    }

    setQuote() {
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
            <Quote text={text} author={author} fetching={fetching} clickAction={QuoteActions.fetchQuote}></Quote>
        );
    }
}