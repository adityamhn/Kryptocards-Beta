import React, { Fragment, useEffect } from 'react'
import './ContactUsPage.scss';
import { store } from '../../app/store';
import {changeNavbarMode} from '../../features/NavbarLogo/NavbarLogoSlice'
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import {SubmitContactForm} from '../../services/contact.service';


const validationSchema = yup.object().shape({
    name: yup.string()
        .required("This is a required field!")
        .strict(),
    email: yup.string().email("Wrong email format!")
        .required("This is a required field!")
        .strict(),

    message: yup.string()
        .required("This is a required field!")
        .strict(),
    phoneNumber: yup.
        string()
        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Invalid format")
        .required("This is  required field!")
        .strict()


})

const formInitialValues = {
    name: '',
    email: '',
    message: '',
    phoneNumber: '',


}

const onFormSubmit = async(values) => {
    
    values.phoneNumber = parseInt(values.phoneNumber);
    console.log(values);
    await SubmitContactForm(values);
    values.phoneNumber = (values.phoneNumber).toString();
}


export const ContactUsPage = () => {

    useEffect(() => {
        store.dispatch(changeNavbarMode({ value: "TEXT",show:true }))
        
    
   

    }, [])

    return (
        <div id="contact-us-main-div">
            <span id="lets">Let's</span>
            <span id="connect">Connect</span>
            <Formik
                initialValues={formInitialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {

                    onFormSubmit(values);
                }}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {

                        return (
                            <Form id="main-form">

                                <Form.Group className="form-group">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={errors.name}
                                        className="form-control" />

                                    <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                        {touched.name ? errors.name : null}
                                    </Form.Control.Feedback>

                                </Form.Group>



                                <div className="form-row" >
                                    <Form.Group className="form-group">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={errors.email}
                                            className="form-control" />
                                        <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                            {touched.email ? errors.email : null}
                                        </Form.Control.Feedback>
                                    </Form.Group>


                                    <Form.Group className="form-group">
                                        <Form.Label>Your Phone Number</Form.Label>
                                        <Form.Control

                                            name="phoneNumber"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={errors.phoneNumber}
                                            className="form-control" />
                                        <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                            {touched.phoneNumber ? errors.phoneNumber : null}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <Form.Group className="form-group">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={errors.message}
                                        as="textarea" className="form-control-textarea" />
                                    <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                        {touched.message ? errors.message : null}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button onClick={(e) => {
                                    e.preventDefault();

                                    handleSubmit();
                                }} id="form-submit-button">
                                    Send
                </Button>

                            </Form>
                        )
                    }}
            </Formik>
        </div>
    )
}
