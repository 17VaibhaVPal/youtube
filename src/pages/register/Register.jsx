import { useState } from "react";
import "./register.scss"

export default function Register() {
    
  return (
    <div className="register">
          <div className="top">
            <div className="wrapper">
              <img 
              className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                  alt="" />
          
          <button className="LoginButton">Sign In</button>
          </div>
          </div>
          
      <div className="container">
              <h1>Unlimited Movies,T.V. Shows and more</h1>
              <h2>Watch anywhere,cancel anytime</h2>
              <p>
                Ready to watch ? Enter your e-mail to create or restart your membership
              </p>
              <div className="input">
                <input type="email" placeholder="email address" />
                <button className="registerButton">Get Started</button>
              </div>
          </div>
          </div>
          );
          }
          
    
  

