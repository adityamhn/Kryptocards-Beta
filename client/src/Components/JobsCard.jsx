import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import './JobsCard.scss'
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import { SubmitApplication } from '../services/applicants.service'



const validationSchema = yup.object().shape({
    name: yup.string("Wrong field field!").
        required("This is a required field!")
        .strict(),
    phone: yup.
        string()
        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Invalid format")
        .required("This is  required field!")
        .strict(),
    email: yup.string().email("Wrong email format!")
        .required("This is a required field!")
        .strict(),

    message: yup.string('Wrong field format!').strict()


})

const formInitialValues = {
    name: '',
    phone: '',
    email: '',

    message: ''


}


export const JobsCard = ({ job }) => {
    const { jobTitle, location, shortDesc, longDesc } = job;

    const [show, setShow] = useState(false);
    const [formView, setFormView] = useState(false)
    const [CV, setCV] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onFormSubmit = (values) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
        formData.append('position', jobTitle);
        formData.append('message', values.message);
        formData.append('CV', CV);
        SubmitApplication(formData)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    const onCVChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 5 * 1024 * 1024) {
            alert("File size shoudn't exceed 5mb!");
            return;
        }
        setCV(file);
    }


    return (
        <>
            <Card className="jobs-card-cont">
                <Card.Header className="jobs-card-header">
                    <div className="head">
                        <h1 className="job-title">{jobTitle}</h1>
                        <div className="location"><HiOutlineLocationMarker className="icon" /> {location}</div>
                    </div>
                    <div className="btns">
                        <Button className="details-btn" onClick={handleShow}>details</Button>

                    </div>

                </Card.Header>
                <Card.Body className="jobs-card-body">
                    <Card.Text className="desc">
                        {shortDesc}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal className="job-modal" size="lg" show={show} onHide={handleClose} centered>
                <div className="close-btn-cont">
                    {!formView ? <MdClose className="close-btn" onClick={() => {
                        handleClose()
                        setFormView(false)
                    }} /> : null}</div>

                <Modal.Body className="modal-body">

                    {!formView ? <>

                        <div className="header">
                            <h1 className="title">{jobTitle}</h1>
                            <h3 className="location"><HiOutlineLocationMarker className="icon" /> {location}</h3>
                        </div>
                        <div className="job-desc">
                            {longDesc}
                        </div>
                        <div className="modal-footer">
                            <Button className="apply-btn" onClick={() => setFormView(true)}>Apply</Button>
                        </div>
                    </> : <>
                        <div className="header">
                            <h1 className="title">Application Form</h1>
                        </div>
                        <div className="job-form-body">
                            <IoArrowBackOutline className="back-icon" onClick={() => setFormView(false)} />
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
                                            <Form className="job-form">
                                                <Row>
                                                    <Form.Group as={Col} className="group">
                                                        <Form.Label className="label">Name <span className="asterisk">*</span> </Form.Label>
                                                        <Form.Control className="field"
                                                            name="name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={errors.name}
                                                        />
                                                        <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                                            {touched.name ? errors.name : null}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} className="group">
                                                        <Form.Label className="label">Email <span className="asterisk">*</span> </Form.Label>
                                                        <Form.Control className="field"
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={errors.email} />
                                                        <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                                            {touched.email ? errors.email : null}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>
                                                <Row>

                                                    <Form.Group as={Col} className="group">
                                                        <Form.Label className="label">Phone Number <span className="asterisk">*</span> </Form.Label>
                                                        <Form.Control className="field"
                                                            name="phone"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={errors.phone}
                                                        />
                                                        <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                                            {touched.phone ? errors.phone : null}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} className="group">
                                                        <Form.Label className="label">CV</Form.Label>
                                                        <Form.Control type="file" accept="application/pdf" className="field" />
                                                    </Form.Group>
                                                </Row>
                                                <Form.Group className="group">
                                                    <Form.Label className="label">Any Extra Message</Form.Label>
                                                    <Form.Control as="textarea" className="textarea"
                                                        name="message"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isInvalid={errors.message}
                                                    />
                                                    <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                                        {touched.message ? errors.message : null}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group className="submit-group">
                                                    <Button className="submit-btn">Submit</Button>
                                                </Form.Group>
                                            </Form>
                                        )
                                    }}
                            </Formik>
                        </div>

                    </>}


                </Modal.Body>

            </Modal>
        </>
    )
}

