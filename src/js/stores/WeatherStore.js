import dispatcher from "../dispatcher";
import { EventEmitter } from "events";

class WeatherStore extends EventEmitter {
    getWeather() {
        return this.weather;
    }

    handleAction(action) {
        switch( action.type ) {
            case "FETCH_WEATHER":
                this.emit("fetching")
            case "FETCH_WEATHER_ERR":
                break;
            case "NEW_WEATHER":
                this.weather = action.weather;
                this.emit("received")
                break;
        }
    }
}

const weatherStore = new WeatherStore;
dispatcher.register(weatherStore.handleAction.bind(weatherStore));

export default weatherStore;