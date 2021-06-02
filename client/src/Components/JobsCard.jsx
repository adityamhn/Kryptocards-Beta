import React, { useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import './JobsCard.scss'




export const JobsCard = ({ job }) => {
    const { jobTitle, location, shortDesc, longDesc } = job;

    const [show, setShow] = useState(false);
    const [formView, setFormView] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            {!formView ?<MdClose className="close-btn" onClick={() => {
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
                            <Form className="job-form">
                                <Row>
                                    <Form.Group as={Col} className="group">
                                        <Form.Label className="label">First Name</Form.Label>
                                        <Form.Control className="field" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="group">
                                        <Form.Label className="label">Last Name</Form.Label>
                                        <Form.Control className="field" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} className="group">
                                        <Form.Label className="label">Email</Form.Label>
                                        <Form.Control className="field" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="group">
                                        <Form.Label className="label">Phone Number</Form.Label>
                                        <Form.Control className="field" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="group">
                                    <Form.Label className="label">Why you want this job?</Form.Label>
                                    <Form.Control as="textarea" className="textarea" />
                                </Form.Group>
                                <Form.Group className="submit-group">
                                    <Button className="submit-btn">Submit</Button>
                                </Form.Group>
                            </Form>
                        </div>

                    </>}


                </Modal.Body>

            </Modal>
        </>
    )
}

