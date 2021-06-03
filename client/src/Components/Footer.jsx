import React from 'react'
import { Container,Button, FormControl, FormLabel, InputGroup, Form } from 'react-bootstrap'
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
            <InputGroup>
                        <FormControl
                         name="email"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={errors.email}
                        className="input" placeholder="ENTER YOUR EMAIL" />
                            <Form.Control.Feedback type='invalid' className="ml-3 signup-form-control-feedback">
                                            {touched.email ? errors.email : null}
                                        </Form.Control.Feedback>
                        <InputGroup.Append>
                            <Button
                            onClick={(e) => {
                                e.preventDefault();

                                handleSubmit();
                            }}
                            
                            className="submit-btn">Subscribe</Button>
                        </InputGroup.Append>
                    </InputGroup>
            </Form>
                          )
                        }}
                </Formik>
            </div>
            <hr className="separator" />
            <div id="footer-bottom-portion">
                        
            </div>
        </div>

        </Container>
    )
}

export default Footer