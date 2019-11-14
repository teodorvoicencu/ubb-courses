import React from 'react'

import { withRouter } from 'react-router-dom';



function TopNavBar(){
    return (
        <div style={{height:"40px",width:"100%",backgroundColor:"grey"}}>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Info">Info</a>
        </div>
    )
}

export default withRouter(TopNavBar);