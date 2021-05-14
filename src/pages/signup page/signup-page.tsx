import react from "react";
import Button from "../../component/button/button";
import "./signup-page.styles.scss";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../component/input/input";

const SignUp = () => {
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
              />
              </div>
              <div className="signup-last-name">
              <Input
                classname="input input-name"
                text="text"
                name="last-name"
                placeholder="Enter Last name"
                label="last name"
              />
            </div>
            </div>
            <div className="signup-email">
              <Input
                classname="input input-credentials"
                text="text"
                name="email"
                placeholder="Enter Email address"
                label="Email"
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
                  text="text"
                  name="Password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className='take-me-to-the-village'>
              <Button
                classname="icon-btn submit-form-btn"
                label="Take me to the Village"
                icon={<FaArrowRight />}
              />
            </div>
            <div className="existing-account">
              <p>
              Already have an account?{" "}
                <a href="/">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
