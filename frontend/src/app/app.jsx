import React from 'react';

import {BrowserRouter as Router,Link} from "react-router-dom";
import AppRouting from './AppRouting'
import TopNavBar from '../Layout/TopNavBar'


import './styles/app.scss';

function App() {
    return (
        <Router>
            <TopNavBar />

            <div style={{height:"calc(100%-40px)",width:"100%"}}>
                <AppRouting />
            </div>

        </Router>
    );
}

export default App;
