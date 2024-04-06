import { useRef, useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState(""); // to store the email entered
  const [password, setPassword] = useState(""); // to store password

  const emailRef = useRef();
  //Refs are used to access the DOM nodes or React elements directly. Here, emailRef will be used to reference the email input field in the JSX.
  const passwordRef = useRef();
  // It will be used to reference the password input field in the JSX.
  

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  // function named handleStart
  //When invoked, it sets the value of the email state variable to the current value of the email input field referenced by emailRef.current.value. 


  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  
  //Overall, these lines of code set up state variables (email and password) to store the values entered into email and password input fields, respectively. It also sets up refs (emailRef and passwordRef) to access the input fields directly, and provides event handlers (handleStart and handleFinish) to update the state variables with the values entered into the input fields
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


        {!email ? 
        //!email ? (: This line checks whether the email state variable is falsy (empty). If email is falsy, it renders the content inside the parentheses. This condition determines whether to display the email input field or the password input field based on whether email has been set
        (
          <div className="input">
            <input type="email" placeholder="email address " ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : 
        //: (: This part of the code represents the "else" condition of the ternary operator. If email is not falsy (i.e., it has a value), the content inside the parentheses will be rendered.
        (
          <form className="input">
            <input type="password" placeholder="password " ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
          //Overall, this code conditionally renders either an email input field with a "Get Started" button or a password input field with a "Start" button based on whether the email state variable has been set. If email is empty, it renders the email input field; otherwise, it renders the password input field.
        )}

        
      </div>
    </div>
  );
}
