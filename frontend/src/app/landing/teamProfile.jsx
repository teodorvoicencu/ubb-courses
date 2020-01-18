// eslint-disable-next-line import/order
import * as React from 'react';

import './styles/landingPage.scss';
import { Image } from 'react-bootstrap';

import profileImage from '../theme/static/profileImage.jpg';

type Props = {
    name: String,
};

const TeamProfile = (props: Props): React.Node => {
    return (
        <div className="w-25 text-center">
            <Image src={profileImage} />
            <p>{props.name}</p>
        </div>
    );
};

export default TeamProfile;
