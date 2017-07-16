import axios from 'axios';
import {browserHistory} from 'react-router';
import AUTH_USER from './types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function (dispatch) { // we are returning function to access dispatch 


        //Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(Response => {

                //update state to indicate user is authenticated
                dispatch({type: AUTH_USER});

                //save the jwt token
                localStorage.setItem('token',response.data.token);

                // redirect to the router '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                //if request is bad..


                //Show an error to the user   

            })




    }

}