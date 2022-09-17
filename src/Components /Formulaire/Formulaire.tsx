import React from "react";
import './formulaire.css';
import '../bootstrap/bootstrap.css';


export function Login() {
    return (
        <>
         <div className="PageContainer">
              <div className="formLog">
                <div className="title"><h4>Log In</h4></div>
                <div className="inputLog">
                  <label htmlFor="Email">Email</label>
                  <input type="email" />
                </div>
                <div className="inputLog">
                  <label htmlFor="password">Password</label>
                  <input type="password" />
                </div>
              </div>
              <div className="bouton">
                <button className="btn2">Sign in</button>
              </div>
         </div>
        </>
    )
}