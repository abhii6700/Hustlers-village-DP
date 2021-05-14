import react from "react";
import Button from "../../component/button/button";
import "./login-page.styles.scss";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Input from "../../component/input/input";

const LoginPage = () => {
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
                classname="input input-credentials"
                text="text"
                name="email"
                placeholder="Enter Email address"
                label="Email"
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
                Don’t have an account on HustlersVillage?{" "}
                <a href="/">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
