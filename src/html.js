import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './router/Home'
import Search from './router/Search'
export default class Html extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Redirect from="/" exact to="/home" />
                </Switch>
            </div>
        )
    }
}
