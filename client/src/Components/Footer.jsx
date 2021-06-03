import React from 'react'
import { Container,Button, FormControl, FormLabel, InputGroup, Form,Row } from 'react-bootstrap'
import './Footer.scss'
import * as yup from 'yup';
import {Formik} from 'formik';
import { SubscribeToNewsletter } from '../services/newsletter.service';

const validationSchema = yup.object().shape({
    email: yup.string().email("Wrong email format!")
        .required("This is a required field!")
        .strict(),
})

const formInitialValues = {
 
    email: '',
 

}


const Footer = () => {
    
    const onFormSubmit = (values)=>{
        SubscribeToNewsletter(values)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err.message);
        })

    }


    return (
        <Container fluid className="footer-sec-cont">
        <div className="wrapper">
            <div className="header">
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
            <Form  className="form-sec">
            <Form.Label className="heading">GET OUR LATEST <span className="other-color">UPDATES</span></Form.Label>
            <div className="row">
                        <Form.Group>

                        <FormControl
                         name="email"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={errors.email}
                        className="input" placeholder="ENTER YOUR EMAIL" />
                            <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                            {touched.email ? errors.email : null}
                                        </Form.Control.Feedback>
                    
                        </Form.Group>
                    
                            <Button
                            onClick={(e) => {
                                e.preventDefault();

                                handleSubmit();
                            }}
                            
                            className="submit-btn">Subscribe</Button>
                   
                    </div>
            </Form>
                          )
                        }}
                </Formik>
            </div>
            <hr className="separator" />
            <div className="footer-bottom-portion">
                <div className="heading-portion">
                        KRYPTO <div className="title2">CARDS</div> 
                </div>
                <div className="terms-portion">
                        All Rights Reserved
                </div>
            </div>
        </div>

        </Container>
    )
}

export default Footer