import axios from 'axios';
import {
    BACKEND_URL
} from '../constants';


export const SubmitContactForm = (body) => {
    const URL = BACKEND_URL + '/api/contact-form-submission';

    return axios.post(URL, body, {
            headers: {
                'content-type': 'application/json'
            }
        })
    


}