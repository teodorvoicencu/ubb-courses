import React from "react";
import {Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'

function AppRouting(){
    return (
        <>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
        </>
    )
    
}

export default AppRouting;