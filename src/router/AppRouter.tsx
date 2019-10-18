import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "../App";
import Mine from "../componnets/Mine/index";
import Music from '../componnets/Music/index';
import Dynamic from '../componnets/Dynamic/index';

export default class AppRouter extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={App} />
                    <Route path="/me" component={Mine} />
                    <Route path="/music" component={Music} />
                    <Route path="/dynamic" component={Dynamic} />
                </div>
            </Router>
        )
    }
}