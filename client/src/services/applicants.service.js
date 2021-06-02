import axios from axios;
import {BACKEND_URL} from '../constants';

export const SubmitApplication = (body) =>{
    return axios.post(BACKEND_URL + '/api/submit-application',
    body);


}
