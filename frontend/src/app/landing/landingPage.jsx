// eslint-disable-next-line import/order
import * as React from 'react';

import './styles/landingPage.scss';

import PageDetail from './pageDetail';
import TeamDisplay from './teamDisplay';
import PageTitle from './pageTitle';

const LandingPage = (): React.Node => {
    return (
        <>
            <PageTitle />

            <PageDetail />

            <TeamDisplay />
        </>
    );
};

export default LandingPage;
