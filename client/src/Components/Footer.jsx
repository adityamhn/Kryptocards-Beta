import React from 'react'
import { Container,Button, FormControl, FormLabel, InputGroup, Form } from 'react-bootstrap'
import './Footer.scss'


const Footer = () => {
    return (
        <Container fluid className="footer-sec-cont">
        <div className="wrapper">
            <div className="header">
            <Form  className="form-sec">
            <Form.Label className="heading">GET OUR LATEST <span className="other-color">UPDATES</span></Form.Label>
            <InputGroup>
                        <FormControl className="input" placeholder="ENTER YOUR EMAIL" />
                        <InputGroup.Append>
                            <Button className="submit-btn">Subscribe</Button>
                        </InputGroup.Append>
                    </InputGroup>
            </Form>
                  
            </div>
            <hr className="separator" />
        </div>

        </Container>
    )
}

export default Footer