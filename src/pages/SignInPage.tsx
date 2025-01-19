import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../style/styles.css"
import {login} from "../store/slices/AuthSlice.ts"
import LogoSection from "../components/LogoSection.tsx";
import SignButton from "../components/SignButton.tsx";
import SignInput from "../components/SignInput.tsx";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const controlSignIn = () => {
        console.log(password);
        if (email && password) {
            const UserData = {
                email: email,
                password: password

            }
            dispatch(login(UserData));
            navigate("dashboard");
        }
    }
    const controlSignUpNavigation = () => {
        navigate("signup");
    };
    return (
        <>
            <section id="login-section">
                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div className="login-card card shadow-lg">
                        <div className="row no-gutters">
                            <LogoSection />
                            {/*<div*/}
                            {/*    className="col-md-6 logo-section d-flex flex-column justify-content-center align-items-center">*/}
                            {/*    <div>*/}
                            {/*        <img src="src/assets/img/logo.jpg" alt="Green Shadow Logo" className="logo-img"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-6 p-4">
                                <h3 className="text-center mb-4 welcome">Welcome Back!</h3>
                                <form>
                                        <SignInput id='login-email' className='form-control userName' type='email'
                                                   placeholder='User Name' icon='fas fa-user' options=''
                                                   onChange={(e) => setEmail(e.target.value)}/>
                                        <SignInput id="login-password" className='form-control userName' type="password"
                                                   placeholder="Password" icon="fas fa-lock" options=''
                                                   onChange={(e) => setPassword(e.target.value)}/>
                                    {/*<div className="form-group position-relative form-group-custom">*/}
                                    {/*    <span className="input-icon"><i className="fas fa-user"></i></span>*/}
                                    {/*    <input id="login-email" type="text" className="form-control userName"*/}
                                    {/*           placeholder="User name" required/>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-group position-relative form-group-custom">*/}
                                    {/*    <span className="input-icon"><i className="fas fa-lock "></i></span>*/}
                                    {/*    <input id="login-password" type="password" className="form-control password"*/}
                                    {/*           placeholder="Password" required/>*/}
                                    {/*</div>*/}
                                        <SignButton
                                            buttons={[
                                                {
                                                    label: 'Sign In',
                                                    className: 'btn btn-success',
                                                    id: 'login-signIn',
                                                    onClick: controlSignIn
                                                },
                                                {
                                                    label: 'Sign Up',
                                                    className: 'btn btn-warning',
                                                    id: 'login-signUp',
                                                    onClick: controlSignUpNavigation
                                                }
                                            ]}
                                        />

                                        {/*<div className="d-flex justify-content-between mt-4">*/}
                                        {/*    <button id="login-signIn" type="button" className="btn btn-success">Sign In*/}
                                        {/*    </button>*/}
                                        {/*    <button id="login-signUp" type="button" className="btn btn-warning">Sign Up*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}