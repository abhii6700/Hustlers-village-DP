import React, {useState} from 'react' 
import Button from "../../component/button/button";
import "./login-page.styles.scss";
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../component/input/input";
import {signInWithGoogle} from '../../component/firebase/firebase.utils'

interface Lprops{
  user: {
    email: string,
    password: string
  }[]
}

const LoginPage: React.FC = () => {
  const[user, setUser] = useState<Lprops['user']>([
    {
      email: '',
      password: ''
    }
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
        
    })
}

const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  e.preventDefault()

  console.log(user)
}


  return (
    <div className="login-page container">
      <div className="login-card">
        <div className="login-content-wrapper">
          <div className="login-title">
            <h2>Log in to your Account</h2>
          </div>
          <div className="login-socials">
            <div className="socials">
              <Button
                classname="icon-btn google-btn"
                label="Google"
                icon={<FcGoogle />}
                onclick={signInWithGoogle}
              />
              <Button
                classname="icon-btn github-btn"
                label="Github"
                icon={<FiGithub />}
              />
              <Button
                classname="icon-btn dribbble-btn"
                label="Dribbble"
                icon={<FiDribbble />}
              />
            </div>
            <div className="or-login-with">
              <div className="hline"></div>
              <div><p>or login with</p></div>
              <div className="hline"></div>
            </div>
          </div>
          <div className="login-with-email">
            <div className="login-email">
              <Input
                classname="input"
                text="email"
                name="email"
                placeholder="Enter Email address"
                label="Email"
                onchange = {handleChange}
              />
            </div>
            <div className="login-password">
              <div className="password-label">
                <p>Password</p>
                <a href="/">
                  <p>Forgot password?</p>
                </a>
              </div>
              <div>
                <Input
                  classname="input"
                  text="password"
                  name="password"
                  placeholder="Enter Password"
                  onchange={handleChange}
                />
              </div>
            </div>
            <div className='take-me-to-the-village'>
              <Button
                classname="icon-btn submit-form-btn"
                label="Take me to the Village"
                icon={<FaArrowRight />}
                onclick={handleSubmit}
              />
            </div>
            <div className="existing-account">
              <p>
                Don’t have an account on HustlersVillage?{" "}
                <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
