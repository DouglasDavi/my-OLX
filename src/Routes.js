import React from 'react'
import {Switch} from 'react-router-dom'

import RounteHandler from './components/RouterHandler'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'
import AddAd from './pages/AddAd'
import Ads from './pages/Ads'

function Router (){
    return (
        <Switch>
            <RounteHandler exact path='/'>
                <Home />
            </RounteHandler>
            <RounteHandler path="/about">
                <About />
            </RounteHandler>
            <RounteHandler path="/signin">
                <SignIn />
            </RounteHandler>
            <RounteHandler path="/signup">
                <SignUp />
            </RounteHandler>
            <RounteHandler path="/ad/:id">
                <AdPage />
            </RounteHandler>
            <RounteHandler private path="/post-an-ad">
                <AddAd />
            </RounteHandler>
            <RounteHandler private path="/ads">
                <Ads />
            </RounteHandler>
            <RounteHandler>
                <NotFound />
            </RounteHandler>
        </Switch>
    )
}
export default Router