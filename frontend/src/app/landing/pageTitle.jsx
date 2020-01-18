import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

const PageTitle = (): React.Node => {
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
                            <a className="btn btn-primary btn-lg" role="button" href="/courses">
                                Explore courses
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default PageTitle;
