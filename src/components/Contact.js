
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { MdOutlineEmail } from 'react-icons/md'
import emailjs from "emailjs-com"
import Particle from './Particle';
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(3, "Must be 3 character or more")
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string()
                .required('Required')
                .min(10, "Must be 10 character or more")
                .max(500, "Must be 500 character or less")
        }),
        onSubmit: values => {
            console.log(values);
            emailjs.send("service_nwjocyo", "template_4ujraib" ,values,"EU5Zlm8Gr5wEFgoKz").
            then((result=>{
                alert("your email is sent successfully.");
            }),(error)=>{
                alert("your email is not sent.");
            });
            
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Container >
            <Particle/>
            <Container fluid className='contact-section'>
            <Row style={{ justifyContent: "center", textAlign: "center" }}>
                <h1 className="project-heading">
                    <strong className="purple">Contact Me </strong>
                </h1>
            </Row>
            <Row>
                <Form style={{padding:"25px",boxShadow: "4px 5px 4px 3px rgba(89, 4, 168, 0.137)",borderRadius:"25px"}} onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor="fullName">First Name</Form.Label>
                            <Form.Control
                                placeholder="Full name"
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className="FieldError">{formik.errors.fullName}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="email">Email Address</Form.Label>
                            <Form.Control
                                placeholder="email"
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="FieldError">{formik.errors.email}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='message'>Message</Form.Label>
                            <Form.Control
                            placeholder='enter your message'
                            as="textarea"
                            rows={5}
                            id="message"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.touched.message && formik.errors.message) ?
                            <div className="FieldError">{formik.errors.message}</div> : null}
    
                        </Form.Group>
                        <Button variant="primary" type="submit">Send message</Button>
                </Form>
            </Row>
            </Container>
        </Container>
    );
};

export default Contact;
