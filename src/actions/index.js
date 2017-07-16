import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function (dispatch) { // we are returning function to access dispatch 


        //Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {

                dispatch({ type: AUTH_USER });

                //save the jwt token
                localStorage.setItem('token', response.data.token);

                // redirect to the router '/feature'
                browserHistory.push('/feature');
                //update state to indicate user is authenticated


            })
            .catch(() => {
                //if request is bad..
                dispatch(authError('Bad Login Info '));

                //Show an error to the user   

            })




    }

}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}