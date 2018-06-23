import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router-3'

import Home from '../components/home'
import Dishes from '../components/dishes'
import MyBag from '../components/myBag'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/dishes' component={Dishes} />
        <Route path='/mybag' component={MyBag} />
        <Redirect from='*' to='/dishes' />
    </Router>
)