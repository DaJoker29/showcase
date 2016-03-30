import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import QuoteController from "./pages/QuoteController";
import WeatherController from "./pages/WeatherController";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="quotes" component={QuoteController}></Route>
            <Route path="weather" component={WeatherController}></Route>
        </Route>
    </Router>,
app);