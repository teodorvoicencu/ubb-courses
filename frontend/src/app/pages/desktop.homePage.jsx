// @flow
import * as React from 'react';

import { LandingTitle, LandingDetails, LandingDisplay } from '../landing';

const HomePage = (): React.Node => {
    return (
        <>
            <LandingTitle />
            <LandingDetails />
            <LandingDisplay />
        </>
    );
};

export default HomePage;
