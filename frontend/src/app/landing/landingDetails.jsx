// @flow
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const LandingDetails = (): React.Node => {
    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <p className="lead font-weight-bold">About</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <p>
                        UBB Courses e-learning courses aim to enhance the knowledge and skills of
                        students who want to understand better the materials presented in
                        university.
                    </p>

                    <hr className="my-4" />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <p className="lead font-weight-bold">What we offer</p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <p>
                        Our project will enable course material upload and organizing them into
                        bite-sized lessons. We aim to support uploading images, videos and other
                        lessons formats. We aim to increase student interactivity with features such
                        as polls, quizzes, and projects such that the students will be able to more
                        easily learn the subjects that matter.
                    </p>

                    <hr className="my-4" />
                </Col>
            </Row>
        </Container>
    );
};

export default LandingDetails;
