import * as React from 'react';

import './style/landingPage.scss';

type Props = {
    name: String,
};

const TeamProfile = (props: Props): React.Node => {
    return (
        <div className="w-25 text-center">
            {/* eslint-disable-next-line max-len,jsx-a11y/alt-text */}
            <img src="https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg" />
            <p>{props.name}</p>
        </div>
    );
};

export default TeamProfile;
