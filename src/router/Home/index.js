import React, { Component } from 'react'
import Header from '../../compontent/Header'
import Nav from '../../compontent/Nav'
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '../../route/Home'
import Honor from '../../route/Honor'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <div>
                    <Switch>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/home/honor" component={Honor}/>
                        <Redirect  to="/home" component={Home}/>
                    </Switch>
                </div>
                
            </div>
        )
    }
}
