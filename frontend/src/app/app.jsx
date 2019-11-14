import React from 'react';

import {BrowserRouter as Router} from "react-router-dom";
import AppRouting from './AppRouting'
import TopNavBar from '../Layout/TopNavBar'


import './styles/app.scss';

function App() {
    return (
        <Router>
            <TopNavBar />

            <AppRouting />

        </Router>
    );
}

export default App;
