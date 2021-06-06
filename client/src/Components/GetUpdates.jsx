import React from 'react'
import { Button, FormControl, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { SubscribeToNewsletter } from '../services/newsletter.service';
import { showFormMessage } from '../util/util';


const validationSchema = yup.object().shape({
    email: yup.string().email("Wrong email format!")
        .required("This is a required field!")
        .strict(),
})

const formInitialValues = {

    email: '',


}
export const GetUpdates = () => {
    const onFormSubmit = (values) => {

        SubscribeToNewsletter(values)
            .then(response => {
                showFormMessage("You Have Successfully! Subscribed!", 'success');
            })
            .catch(err => {

                showFormMessage("There Was A Server Error, Please Try Again Later!", 'error')
            })

    }


    return (
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
                                    <Form className="form-sec">
                                        <Form.Label className="heading">GET OUR LATEST <span className="other-color">UPDATES</span></Form.Label>
                                        <div className="custom-row">
                                            <div className="custom-col">
                                                <FormControl
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={errors.email}
                                                    className="input-f col" placeholder="ENTER YOUR EMAIL" />


                                            </div>



                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    handleSubmit();
                                                }}
                                                disabled={errors.email}

                                                className="submit-btn-f">Subscribe</Button>



                                        </div>
                                    </Form>
                                )
                            }}
                    </Formik>
                </div>
    )
}
