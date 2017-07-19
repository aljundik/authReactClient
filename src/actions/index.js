import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function (dispatch) { // we are returning function to access dispatch 


        //Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {

                

                //save the jwt token
                localStorage.setItem('token', response.data.token);

                // redirect to the router '/feature'
                browserHistory.push('/');
                //update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });


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

export function signoutUser(){

    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}