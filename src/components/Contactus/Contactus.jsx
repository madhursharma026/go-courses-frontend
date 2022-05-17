import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import '../../asset/css/Bootstrap.min.css'
import "../Contactus/Contactus.css"

export class Contactus extends Component {
    render() {
        return (

            <Fragment>
                <div className='container-lg'>
                    <div className="Contactbg">
                        <div className="text-center row gx-5 justify-content-center">
                            <Row className='col-lg-8 col-xl-6"'>
                                <Col>
                                    <h4>GOT A QUESTION ?</h4>
                                    <h1>Contact <span> Go Courses</span></h1>
                                    <p>We are here to help you and answer any question you might have, we'd love to hear from you</p>
                                    <Form>
                                        <Form.Group className='form-floating mb-3' >
                                            <Form.Control type="Text" data-testid="name" placeholder="Enter your Name " />
                                            <Form.Label >Enter your name</Form.Label>
                                        </Form.Group>
                                        <Form.Group className='form-floating mb-3'>
                                            <Form.Control type="email" data-testid="email" placeholder="Enter your Email " />
                                            <Form.Label >Email address</Form.Label>
                                        </Form.Group>
                                        <FloatingLabel controlId="floatingTextarea" label="Write your message here" className="mb-3">
                                            <Form.Control className='textArea' as="textarea" placeholder="Leave a comment here" data-testid="message" />
                                        </FloatingLabel>
                                        <Button variant="warning" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contactus
