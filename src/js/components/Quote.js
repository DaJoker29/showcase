import React from "react";

export default class Quote extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { text, author } = this.props;
        return (
            <div class="well">
                <div class="row">
                    <div class="col-xs-8">
                        <blockquote id="quote">
                            {text}
                            <footer>{author}</footer>
                        </blockquote>
                    </div>
                    <div class="col-xs-4">
                        <div>
                            <div class="btn-group-lg">
                                <button id="another" class="btn btn-block btn-primary">Another One!</button>
                                <a href={`http://twitter.com/home?status=\"${text}\" %E2%80%94${author}`} target="_blank"  id="tweetThis" class="btn btn-block btn-info"><i class="fa fa-twitter"></i> Tweet this</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}