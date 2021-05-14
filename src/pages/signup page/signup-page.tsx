import Button from "../../component/button/button";
import "./signup-page.styles.scss";
import {Link, useHistory} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../component/input/input";
import { useState } from "react";

interface Sprops{
  newuser:{
    firstname: string,
    lastname: string,
    email: string,
    password: string
  }[]
}

const SignUp: React.FC = () => {
  const [newuser, setNewuser] = useState<Sprops['newuser']>([{
    firstname:'',
    lastname: '',
    email: '',
    password: ''
  }])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setNewuser({
        ...newuser,
        [e.target.name] : e.target.value
      })
    }

    const history = useHistory()


    const handleClick = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      e.preventDefault()

      console.log(newuser)
      history.push('/select-role')
    }

  return (
    <div className="signup-page container">
      <div className="signup-card">
        <div className="signup-content-wrapper">
          <div className="signup-title">
            <h2>Log in to your Account</h2>
          </div>
          <div className="signup-socials">
            <div className="socials">
              <Button
                classname="icon-btn google-btn"
                label="Google"
                icon={<FcGoogle />}
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
            <div className="or-signup-with">
              <div className="hline"></div>
              <div><p>or sign up with</p></div>
              <div className="hline"></div>
            </div>
          </div>
          <div className="signup-with-email">
            <div className="signup-name">
            <div className="signup-first-name">
              <Input
                classname="input input-name"
                text="text"
                name="first-name"
                placeholder="Enter First name"
                label="First name"
                onchange= {handleChange}
              />
              </div>
              <div className="signup-last-name">
              <Input
                classname="input input-name"
                text="text"
                name="last-name"
                placeholder="Enter Last name"
                label="last name"
                onchange= {handleChange}
              />
            </div>
            </div>
            <div className="signup-email">
              <Input
                classname="input input-credentials"
                text="email"
                name="email"
                placeholder="Enter Email address"
                label="Email"
                onchange={handleChange}
              />
            </div>
            <div className="signup-password">
              <div className="password-label">
                <p>Password</p>
                <a href="/">
                  <p>Forgot password?</p>
                </a>
              </div>
              <div>
                <Input
                  classname="input input-credentials"
                  text="password"
                  name="Password"
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
                onclick={handleClick}
              />
            </div>
            <div className="existing-account">
              <p>
              Already have an account?{" "}
                <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
