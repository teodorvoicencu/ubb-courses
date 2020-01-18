// @flow
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import TeamProfile from './teamProfile';

const LandingDisplay = (): React.Node => {
    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <p className="lead font-weight-bold">Team</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="team w-50 d-flex flex-wrap">
                    <TeamProfile name={'Teodor Voicencu'} />
                    <TeamProfile name={'Mihnea Ungureanu'} />
                    <TeamProfile name={'Sebastian Stegaru'} />
                    <TeamProfile name={'Teodor Strut'} />
                    <TeamProfile name={'Nicoleta Ungur'} />
                    <TeamProfile name={'Matei Stroia'} />
                    <TeamProfile name={'Vlad Tugui'} />
                    <TeamProfile name={'Tanko Gabor Tihamer'} />
                </Col>
            </Row>
        </Container>
    );
};

export default LandingDisplay;
