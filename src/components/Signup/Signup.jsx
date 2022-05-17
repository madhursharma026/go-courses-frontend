import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../asset/css/Bootstrap.min.css'
import "../Signup/Signup.css"
import { Link } from 'react-router-dom'

export default function Signup() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);



    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formValues.username) {
            errors.username = "Username is required!";
        }
        if (!formValues.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "this is not a valid email format!";
        }
        if (!formValues.password) {
            errors.passowrd = "password is required!";
        } else if (values.password.length < 4) {
            errors.passowrd = "password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.passowrd = "password cannot exceed more than 10 characters";
        }
        return errors;

    }


    return (

        <div className='container-lg text-center'>
            <div className='LoginPage'>
                <div className='LoginForm'>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='messagesuccess'> signed in successfully </div>) :
                        (<pre>  </pre>)}
                    <Form onSubmit={handleSubmit}>
                        <h1> Sign UP to <span> Go Courses </span> </h1>
                        <div className='FormStyle'>
                            <Form.Group size="lg" controlId="user">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text"
                                    data-testid="username"
                                    name="username"
                                    placeholder="username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                />

                            </Form.Group>
                            <p className='errorM'> {formErrors.username}</p>
                        </div>
                        <div className='FormStyle'>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    data-testid="email"
                                    name="email"
                                    placeholder="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <p className='errorM'> {formErrors.email} </p>
                        </div>
                        <div className='FormStyle'>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    data-testid="password"
                                    name="password"
                                    placeholder="password"
                                    value={formValues.passowrd}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <p className='errorM'>  {formErrors.passowrd}</p>
                        </div>
                        <Button blocksize="lg" variant="warning" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
