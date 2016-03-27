import { EventEmitter } from "events";

class QuotesStore extends EventEmitter {
    constructor() {
        super();
        this.quote = {
            author: 'Khalil Gibran',
            text: 'Santa gone pay what he owe'
        }
    }

    getQuote() {
        return this.quote;
    }
}

const quotesStore = new QuotesStore;

export default quotesStore;