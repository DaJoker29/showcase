import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Weather from "./pages/Weather";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="quotes" component={Quotes}></Route>
            <Route path="weather" component={Weather}></Route>
        </Route>
    </Router>,
app);