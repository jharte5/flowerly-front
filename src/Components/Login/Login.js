import React, { Component } from 'react'
import validator from 'validator'
import InputGroup from '../SharedGroup/InputGroup'
import ButtonGroup from '../SharedGroup/ButtonGroup'
import {successToast, failureToast} from '../Toastify/Toast'
import {loginApi} from '../../redux/actions/authUserActions'
import {connect} from 'react-redux'
import {checkToken} from '../PrivateRoute/CheckToken'
import './Login.css'

export class Login extends Component {
    state = {
        canSubmit: true,
        formSetting: {
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
    componentDidMount() {
        if (checkToken()) {
            this.props.history.push("/");
        }
    };
    checkInputValidation = (errorState, inputName, inputValue) => {
        switch (inputName) {
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
                let validatedPassword;
                validatedPassword = !validator.isEmpty(inputValue);
                if (!validatedPassword) {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = "Password cannot be empty";
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
        inputForm["email"].error = isValidatedCheck.emailError;
        inputForm["password"].error = isValidatedCheck.passwordError;
        this.setState({
            validate: isValidatedCheck,
        });
        if (
            inputForm["email"].error.noError === false ||
            inputForm["password"].error.noError === false
        ) {
            this.setState({
            canSubmit: true,
            });
            return;
        }
        if (
            inputForm["email"].error.noError === true &&
            inputForm["password"].error.noError === true
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
    onSubmit = async (event, dispatch) => {
        event.preventDefault();
        const { email, password } = this.state.formConfig;
        try {
            console.log("MAybe??", email.value)
            await this.props.loginApi({
                email:email.value,
                password: password.value,
            })
    
            let inputForm = {
            ...this.state.formSetting,
            };
            inputForm["email"].value = "";
            inputForm["password"].value = "";
    
            successToast("Welcome Back!");
            this.props.history.push("/home")
    
        } catch (e) {
            failureToast(e);
        }
    };
    
    render() {
        const { canSubmit, formSetting } = this.state;
        let inputArray = [];
        for (let key in formSetting) {
            inputArray.push({
                formSetting: formSetting[key],
            });
        }
        return (
            <div className="signup-container">
                <h1>Login</h1>
                <form className="signup-form" onSubmit={this.onSubmit}>
                    {inputArray.map((element) => {
                        const {
                            formSetting: { name, placeholder, value, error },
                        } = element;
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
                        );
                    })}
                    <ButtonGroup
                        buttonStyle="form-button"
                        title="Login Here"
                        disabled={canSubmit}
                    />
                </form>
            </div>
//             <body>
//     <div class="box">
//       <div class="icon"><i class="fas fa-user-alt"></i></div>
//       <form id="login" action="#">
//         <h1>Login</h1>
//         <h2>Email</h2>
//         <input class="email" type="text"/>
//         <h2>Password</h2>
//         <div class="input-box">
//           <i class="far fa-eye eye-btn"></i>
//           <input class="password" type="password"/>
//         </div>
//         <button type="submit" value="Login">Login</button>
//         <span class="grey forgot"><a href="#">Forgot your password?</a></span>
//         <span class="grey signup">Don't have an account? <a href="#" class="signup-btn">Sign up</a></span>
//       </form>
      
//       <form id="signup">
//         <h1>Sign Up</h1>
//         <h2>Pick a username</h2>
//         <div class="input-box">
//           <input class="username" type="text"/>
//         </div>
//         <h2>Enter an e-mail</h2>
//         <div class="input-box">
//           <input class="e-mail" type="text" placeholder="example@mail.com"/>
//         </div>
//         <div class="input-box">
//           <input class="password" type="password" placeholder="Repeat your e-mail" disabled/>
//         </div>
//         <h2>Choose a password</h2>
//         <div class="passwords-box">
//           <div class="input-box">
//             <i class="far fa-eye eye-btn" alt="looll"></i>
//             <input class="password" type="password"/>
//           </div>
//           <div class="input-box">
//             <input class="input re" type="password" placeholder="Repeat your password" disasbled/>
//           </div>
//         </div>
//         <button type="submit" value="Sign Up">Sign Up</button>
//         <span class="grey login">Signed up already? <a href="#">Log in</a></span>
//       </form>
//     </div>
//   </body>
        )
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {loginApi})(Login);