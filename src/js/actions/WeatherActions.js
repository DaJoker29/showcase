import axios from "axios";
import dispatcher from "../dispatcher";
import { toFahr } from "../helpers";

export function fetchWeather() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude: lat, longitude: lon } = position.coords;
        const key = "208f4ab7f38bd7b2f905d78ec3d83724";
        const units = "metric";

        axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=${key}&units=${units}&lat=${lat}&lon=${lon}`)
            .then( response  => {
                const { main, wind, sys, weather, name} = response.data;

                const obj = {
                    name,
                    cTemp: main.temp.toFixed(0),
                    fTemp: toFahr(main.temp).toFixed(0),
                    wind: wind.speed,
                    humidity: main.humidity,
                    country: sys.country,
                    description: weather[0].description,
                    icon: weather[0].icon
                }

                dispatcher.dispatch({ type: "NEW_WEATHER", weather: obj });
            })
            .catch(error => {
                dispatcher.dispatch({ type: "FETCH_WEATHER_ERR", error })
            });

            dispatcher.dispatch({
                type: "FETCH_WEATHER"
            });
    });
}