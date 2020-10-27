import React, { Component } from 'react';
import {signInWithGoogle} from '../firebase'

export default class SignIn extends Component {
  
         render() {
                  return (
                    <div className="sign-form">
                      <h1>Sign In/Sign Up</h1>
                      <button onClick={signInWithGoogle}>
                        <img
                          className="image"
                          src="https://www.flaticon.com/svg/static/icons/svg/281/281764.svg"
                        />
                        Sign In With Google/Sign Up With Google
                      </button>
                    </div>
                  );
         }
}
// export default SignIn;
