import axios from 'axios';
import {
    BACKEND_URL
} from '../constants';


export const SubmitContactForm = (body) => {
    const URL = BACKEND_URL + '/api/contact-form-submission';

    axios.post(URL, body, {
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })


}