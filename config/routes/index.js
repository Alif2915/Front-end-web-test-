import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login, Register, Home } from '../../containers/pages';

class Routes extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/'>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes;