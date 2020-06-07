import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./NavBar";
import About from "./About";
import User from "./User";
import Top from "./Top";
import UserDetail from "./UserDetail";
import UserCreate from "./UserCreate";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Top}/>
                    <Route path="/about" component={About}/>
                    <Route path="/users" exact component={User}/>
                    <Route path="/users/create" exact component={UserCreate}/>
                    <Route path="/users/:id" component={UserDetail}/>
                </Switch>
            </div>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
