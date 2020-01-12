// @flow
import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './styles/userProfileImage.scss';

type Props = {
    imageUrl: string,
};

const UserProfileImage = ({ imageUrl }: Props): React.Node => {
    return (
        <Row className="justify-content-md-center">
            <Col xs={4} md={2}>
                <Image src={imageUrl} className={'profileImage'} />
            </Col>
        </Row>
    );
};

export default UserProfileImage;
