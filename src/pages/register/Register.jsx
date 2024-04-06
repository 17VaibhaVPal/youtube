import { useRef, useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState(""); // to store the email entered
  const [password, setPassword] = useState(""); // to store password

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <button className="LoginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited Movies,T.V. Shows and more</h1>
        <h2>Watch anywhere,cancel anytime</h2>
        <p>
          Ready to watch ? Enter your e-mail to create or restart your
          membership
        </p>

        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address " ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password " ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
