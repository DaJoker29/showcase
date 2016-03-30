import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class QuoteStore extends EventEmitter {
  getQuote() {
    return this.quote;
  }

  handleAction(action) {
    switch (action.type) {
      case 'NEW_QUOTE':
        this.quote = action.quote;
        this.emit('received');
        break;
      case 'FETCH_QUOTE':
        this.emit('fetching');
        break;
      case 'FETCH_ERR':
      default:
        break;
    }
  }
}

const quoteStore = new QuoteStore;
dispatcher.register(quoteStore.handleAction.bind(quoteStore));

export default quoteStore;
