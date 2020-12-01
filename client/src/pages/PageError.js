import { Col, Container, Row } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import PropTypes from 'prop-types';
import React from 'react';

function PageError({ location }) {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <p>{location.pathname}</p>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}
PageError.propTypes = {
    location: PropTypes.object
};

export default PageError;