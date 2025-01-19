import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../style/styles.css"
import LogoSection from "../components/LogoSection.tsx";
import SignButton from "../components/SignButton.tsx";
import SignInput from "../components/SignInput.tsx";

export default function SignUpPage() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[role, setRole] = useState("");
    const navigate = useNavigate();

    const controlSignUp = () => {
        if (email && password && role ) {
            localStorage.setItem("email", email);
            localStorage.setItem("role", role);
            navigate("/");
        }
    }
    const controlSignInNavigation = () => {
        navigate("/");
    }

    return (
        <>
            <section id="signUp-section">
                <div className="container d-flex justify-content-center align-items-center min-vh-100 custom-container">
                    <div className="login-card card shadow-lg">
                        <div className="row no-gutters">
                            <div className="col-md-6 p-4">
                                <h3 className="text-center mb-4 welcome">Create an account!</h3>
                                <form>
                                    <SignInput id={'signUp-email'} type='email' className='form-control userName' placeholder='Email' icon='fas fa-user' options='' onChange={(e) => setEmail(e.target.value)}/>
                                    <SignInput id={'signUp-password'} type='password' className='form-control password' placeholder='Password' icon='fas fa-lock' options='' onChange={(e) => setPassword(e.target.value)}/>
                                    <SignInput id={'SelectRole'} type='select' className='form-control role' options={[{value:'', label: 'Select Your Role'}, {value: 'ADMINISTRATOR', label: 'Admin'}, {value: 'MANAGER', label: 'Manager'}, {value: 'SCIENTIST', label: 'Scientist'}, {value: 'OTHER', label: 'Other'},]} icon='fas fa-briefcase' placeholder='Role' onChange={(e) => setRole(e.target.value)}/>
                  {/*                  <div className="form-group position-relative form-group-custom">*/}
                  {/*<span className="input-icon">*/}
                  {/*  <i className="fas fa-envelope"></i>*/}
                  {/*</span>*/}
                  {/*                      <input*/}
                  {/*                          id="signUp-email"*/}
                  {/*                          type="email"*/}
                  {/*                          className="form-control userName"*/}
                  {/*                          placeholder="Email"*/}
                  {/*                          required*/}
                  {/*                      />*/}
                  {/*                  </div>*/}
                  {/*                  <div className="form-group position-relative form-group-custom">*/}
                  {/*<span className="input-icon">*/}
                  {/*  <i className="fas fa-lock"></i>*/}
                  {/*</span>*/}
                  {/*                      <input*/}
                  {/*                          id="signUp-password"*/}
                  {/*                          type="password"*/}
                  {/*                          className="form-control password"*/}
                  {/*                          placeholder="Password"*/}
                  {/*                          required*/}
                  {/*                      />*/}
                  {/*                  </div>*/}
                  {/*                  <div className="form-group form-group-custom">*/}
                  {/*                      <label htmlFor="SelectRole">*/}
                  {/*  <span className="input-icon">*/}
                  {/*    <i className="fas fa-briefcase"></i>*/}
                  {/*  </span>*/}
                  {/*                      </label>*/}
                  {/*                      <select id="SelectRole" className="form-control role" required>*/}
                  {/*                          <option value="">Choose Your role...</option>*/}
                  {/*                          <option value="ADMINISTRATOR">Admin</option>*/}
                  {/*                          <option value="MANAGER">Manager</option>*/}
                  {/*                          <option value="SCIENTIST">Scientist</option>*/}
                  {/*                          <option value="OTHER">Other</option>*/}
                  {/*                      </select>*/}
                  {/*                  </div>*/}
                                    <SignButton buttons={[
                                            {label: 'Sign In', id:"signInBtn", className: 'btn btn-warning', onClick: controlSignInNavigation },
                                            {label: 'Sign Up', id:"signUpBtn", className: 'btn btn-success' ,onClick: controlSignUp},
                                            ]}
                                    />
                  {/*                  <div className="d-flex justify-content-between mt-4">*/}
                  {/*                      <button*/}
                  {/*                          id="signInBtn"*/}
                  {/*                          type="button"*/}
                  {/*                          className="btn btn-warning"*/}
                  {/*                          onClick={() => console.log('Sign In button clicked')}*/}
                  {/*                      >*/}
                  {/*                          Sign In*/}
                  {/*                      </button>*/}
                  {/*                      <button*/}
                  {/*                          id="signUpBtn"*/}
                  {/*                          type="button"*/}
                  {/*                          className="btn btn-success"*/}
                  {/*                          onClick={() => console.log('Sign Up button clicked')}*/}
                  {/*                      >*/}
                  {/*                          Sign Up*/}
                  {/*                      </button>*/}
                  {/*                  </div>*/}
                                </form>
                            </div>
                            <LogoSection/>
                            {/*<div*/}
                            {/*    className="col-md-6 logo-section d-flex flex-column justify-content-center align-items-center">*/}
                            {/*    <div>*/}
                            {/*        <img src="img/logo.jpg" alt="Green Shadow Logo" className="logo-img"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}