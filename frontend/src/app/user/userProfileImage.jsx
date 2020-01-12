// @flow
import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import './styles/userProfileImage.scss';
import profileImage from '../theme/static/profileImage.jpg';

const UserProfileImage = (): React.Node => {
    return (
        <Row className="justify-content-md-center">
            <Col xs={4} md={2}>
                <Image src={profileImage} className={'profileImage'} />
            </Col>
        </Row>
    );
};

export default UserProfileImage;
