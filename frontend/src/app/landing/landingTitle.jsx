// @flow
import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { AppRoutes } from '../types';

const LandingTitle = (): React.Node => {
    return (
        <Jumbotron>
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <h1 className="display-4">Welcome to UBB Courses!</h1>
                        <p className="lead">
                            The aim of this project is to create a friendlier environment for the
                            students to learn during the university.
                        </p>
                        <hr className="my-4" />
                        <br />
                        <p className="lead">
                            <NavLink
                                className="btn btn-primary btn-lg"
                                role="button"
                                to={AppRoutes.COURSES}
                            >
                                Explore courses
                            </NavLink>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default LandingTitle;
