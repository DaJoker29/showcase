import React from 'react';

export default class Quote extends React.Component {
  render() {
    const { text, author, fetching, clickAction } = this.props;
    const disabledClass = fetching ? ' disabled' : '';
    const iconClass = fetching ? ' fa-spinner fa-spin' : 'fa-quote-left';

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <p className="lead">This is an application I built as part of the <a href="http://www.freecodecamp.com" target="_blank">Free Code Camp</a> Front End Development Course. It takes quotes from an API (<a href="http://quotesondesign.com" target="_blank">Quotes on Design</a>) and displays them, allowing the user to tweet their favorite quotes. A simple AJAX design.
            </p>
          </div>
          <div id="content">
            <div className="well">
              <div className="row">
                <div className="col-sm-8">
                  <blockquote id="quote">
                    {text || 'Loading'}
                    <footer>{author || 'Loading'}</footer>
                  </blockquote>
                </div>
                <div className="col-sm-4">
                  <div>
                    <div className="btn-group-lg">
                      <button
                        id="another"
                        className={`btn btn-block btn-primary ${disabledClass}`}
                        onClick={clickAction}
                      >
                        <i className={`fa ${iconClass}`}></i>&nbsp;
                        { fetching ? 'Fetching...' : 'Get Quote'}
                      </button>
                      <a href={`http://twitter.com/home?status=\"${text}\" %E2%80%94${author}`} target="_blank" id="tweetThis" className="btn btn-block btn-info">
                        <i className="fa fa-twitter"></i> Tweet this
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Quote.propTypes = {
  text: React.PropTypes.string,
  author: React.PropTypes.string,
  fetching: React.PropTypes.bool.isRequired,
  clickAction: React.PropTypes.func.isRequired,
};
