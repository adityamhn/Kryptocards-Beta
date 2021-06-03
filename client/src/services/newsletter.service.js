import axios from 'axios';
import {BACKEND_URL} from '../constants';


export const SubscribeToNewsletter = (body)=>{
    return axios.post(BACKEND_URL + '/api/subscribe-newsletter',body,{
        headers : {
            'content-type' : "application/json"
        }
    });


}