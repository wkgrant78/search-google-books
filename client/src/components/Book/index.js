import React from 'react';
import { ListItem } from '../List';
import { Row, Col } from '../Grid';
import './style.css';

function Book(props) {

    return (
        <ListItem>
            <Row>
                <Col size="md-2">

                </Col>
                <Col size="md-10" key={props.id}>
                    <h4 className="font-bold">{props.title}</h4>


                </Col>
            </Row>

            <Row>
                <Col size="12 sm-4 md-4">
                    <img
                        className="img-thumbnail img-fluid w-35"
                        src={props.image}
                        alt={props.title}
                    />



                </Col>
                <Col size="12 sm-8 md-8">
                    <p className="author">Written by {props.authors ? props.authors.join(`, `) : "Unknown author"}</p>
                    <p>{props.description}</p>
                    <div className="btn-container">
                        <a id="space"
                            className="btn btn-secondary ml-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.link}
                        >
                            View
                        </a>

                        <button className={props.submitBtnClassName} onClick={props.onSubmit}>
                            {props.submitLabel}
                        </button>
                    </div>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Book;