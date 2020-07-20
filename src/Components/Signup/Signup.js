import React, { Component } from 'react'
import { connect } from 'react-redux'
import {checkToken} from '../PrivateRoute/CheckToken'
import { successToast, failureToast } from '../Toastify/Toast';
import { signupApi } from '../../redux/actions/authUserActions'
import validator from 'validator'
import InputGroup from '../SharedGroup/InputGroup';
import ButtonGroup from '../SharedGroup/ButtonGroup'

export class Signup extends Component {
    state = {
        canSubmit: true,
        formSetting: {
            username: {
                name: "username",
                placeholder: "Enter username",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
            email: {
                name: "email",
                placeholder: "Enter email",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
            password: {
                name: "password",
                placeholder: "Enter password",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
        },
        validate: {
            usernameError: {
                noError: null,
                message: "",
            },
            emailError: {
                noError: null,
                message: "",
            },
            passwordError: {
                noError: null,
                message: "",
            },
        },
    };
    componentDidMount(){
        if(checkToken()) {
            this.props.history.push('/')
        }
    };
    checkInputValidation = (errorState, inputName, inputValue) => {
        switch (inputName) {
            case "username":
                let validatedUsername;
                validatedUsername = validator.matches(
                    inputValue,
                    /^[a-zA-Z0-9]{1,20}$/
                );
                if (!validatedUsername) {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message = "cannot contain special characters and minimum of 2 and maximum of 20 characters";
                    return errorState;
                } else {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message = "";
                    return errorState;
                }
            case "email":
                let validatedEmail;
                validatedEmail = validator.isEmail(inputValue);
                if (!validatedEmail) {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = "It must be an email";
                    return errorState;
                } else {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = "";
                    return errorState;
                }
            case "password":
                let validatedPassword = true;
                if (!validatedPassword) {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = "Minimum eight characters, at least one letter, one number and one special character";
                    return errorState;
                } else {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = "";
                    return errorState;
                }
            default:
                return errorState;
        }
    };
    onChange = (event) => {
        let inputForm = {
            ...this.state.formSetting,
        };
        inputForm[event.target.name].value = event.target.value;
        let isValidatedCheck = this.checkInputValidation(
            this.state.validate,
            event.target.name,
            event.target.value
        );
        inputForm["username"].error = isValidatedCheck.usernameError;
        inputForm["email"].error = isValidatedCheck.emailError;
        inputForm["password"].error = isValidatedCheck.passwordError;
        this.setState({
            validate: isValidatedCheck,
        });
        if (
            inputForm["email"].error.noError === false ||
            inputForm["password"].error.noError === false ||
            inputForm["username"].error.noError === false
        ) {
            this.setState({
                canSubmit: true,
            });
            return;
        }
        if (
            inputForm["email"].error.noError === true &&
            inputForm["password"].error.noError === true &&
            inputForm["username"].error.noError
        ) {
            this.setState({
                canSubmit: false,
            });
            return;
        } else {
            this.setState({
                ...this.state,
                formConfig: inputForm,
            });
            return;
        }
    };
    onSubmit = async (event) => {
        event.preventDefault();
        const { email, password, username } = this.state.formConfig;
        try {
            let inputForm = {
                ...this.state.formSetting,
            };
            await this.props.signupApi({
                email: email.value,
                password: password.value,
                username: username.value
            })
            successToast("Welcome, please login!");
            inputForm["email"].value = "";
            inputForm["password"].value = "";
            inputForm["username"].value = "";
            this.setState({
                ...this.state,
                formSetting: inputForm,
                onSubmit: false,
            });
            this.props.history.push('/login')
        } catch (e) {
            failureToast(e);
        }
    };
    render() {
        const {canSubmit, formSetting} = this.state
        let inputArray = []
        for (let key in formSetting) {
            inputArray.push({
                formSetting: formSetting[key]
            })
        }
        return (
            <div className="signup-container">
                <h1>Sign up</h1>
                <form className="signup-form" onSubmit={this.onSubmit}>
                    {inputArray.map((element) => {
                        const {
                            formSetting: {name, placeholder, value, error}
                        } = element
                        return (
                            <InputGroup
                                key={name}
                                name={name}
                                placeholder={placeholder}
                                onChange={this.onChange}
                                value={value}
                                error={error}
                                type={name}
                            />
                        )
                    })}
                    <ButtonGroup
                        buttonStyle="form-button"
                        title="Sign up"
                        disabled={canSubmit}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps, { signupApi })(Signup)