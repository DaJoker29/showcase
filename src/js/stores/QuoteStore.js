import dispatcher from "../dispatcher";
import { EventEmitter } from "events";

class QuoteStore extends EventEmitter {
    getQuote() {
        return this.quote;
    }

    handleAction(action) {
        switch( action.type ) {
            case "FETCH_QUOTE":
                this.emit("fetching")
            case "FETCH_ERR":
                break;
            case "NEW_QUOTE":
                this.quote = action.quote;
                this.emit("received")
                break;
        }
    }
}

const quoteStore = new QuoteStore;
dispatcher.register(quoteStore.handleAction.bind(quoteStore));

export default quoteStore;