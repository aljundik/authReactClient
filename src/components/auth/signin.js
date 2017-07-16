import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class Signin extends Component {
    handleFormSubmit({ email, password }) {
        // console.log({email, password});
        // console.log("hi");
        // need to do somthing to log user in
        this.props.signinUser({ email, password });



    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Ooops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label> Email: </label>
                    <Field name="email" component="input" type="text" className="form-control" />
                    {/* <input {...email} className="form-control" /> */}
                </fieldset>
                <fieldset className="form-group">
                    <label> Password: </label>
                    <Field name="password" component="input" type="password" className="form-control" />
                    {/* <input {...password} className="form-control" /> */}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary"> Sign in </button>
            </form>
        )

    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({ form: 'sigin', fields: ['email', 'password'] })(Signin);
export default connect(mapStateToProps, actions)(Signin);

