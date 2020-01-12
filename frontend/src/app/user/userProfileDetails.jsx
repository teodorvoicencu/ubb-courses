// @flow
import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserProfileDetails = (): React.Node => {
    const name = useSelector(state => state.user.name);
    const email = useSelector(state => state.user.username);
    return (
        <Row className="justify-content-md-center">
            <Col md={6} xs={8}>
                <Card>
                    <Card.Header className="text-center">
                        <Card.Title as={'h2'}>{`${name}'s Profile`}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="justify-content-md-center">
                            <Col md={{ span: 4, offset: 2 }}>Name</Col>
                            <Col md={6}>{name}</Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 4, offset: 2 }}>Email</Col>
                            <Col md={6}>{email}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UserProfileDetails;
