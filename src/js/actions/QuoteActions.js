import axios from "axios";
import dispatcher from "../dispatcher";

export function fetchQuote() {
    dispatcher.dispatch({
        type: "FETCH_QUOTE"
    });

    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cache=' + (Math.random()*10000000))
        .then(( response ) => {
            const { title, content } = response.data[0];
            const quote = {
                author: title,
                text: unescapeHTML( content.replace(/<\/*\w+>|\s+$/g, '') )
            }
            dispatcher.dispatch({ type: "NEW_QUOTE", quote });
        })
        .catch(error => {
            dispatcher.dispatch({ type: "FETCH_ERR", error })
        });
}

function unescapeHTML (html) {
    const element = document.createElement('textarea');
    element.innerHTML = html;
    return element.textContent;
}