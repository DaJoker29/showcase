import * as QuoteActions from "../actions/QuoteActions";
import React from "react";

export default class Quote extends React.Component {
    fetchQuote() {
        QuoteActions.fetchQuote();
    }

    render() {
        const { text, author, fetching } = this.props;
        const disabledClass = fetching ? ' disabled' : '';

        return (
            <div class="well">
                <div class="row">
                    <div class="col-xs-8">
                        <blockquote id="quote">
                            {text ? text : 'Loading'}
                            <footer>{author ? author : 'Loading'}</footer>
                        </blockquote>
                    </div>
                    <div class="col-xs-4">
                        <div>
                            <div class="btn-group-lg">
                                <button id="another" class={`btn btn-block btn-primary ${disabledClass}`} onClick={this.fetchQuote.bind(this)}>
                                    { fetching ? 'Fetching...' : 'Get Quote'}
                                </button>
                                <a href={`http://twitter.com/home?status=\"${text}\" %E2%80%94${author}`} target="_blank"  id="tweetThis" class="btn btn-block btn-info">
                                    <i class="fa fa-twitter"></i> Tweet this
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}