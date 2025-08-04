 import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './Auth.css';

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container"style={{backgroundColor:props.mode==='dark'?'#282c34':' #f2f4fb' , color:props.mode==='dark'?'white':'black'}}>
      <div className="auth-card" style={{backgroundColor:props.mode==='dark'?'#303841':' #fcfefe' , color:props.mode==='dark'?'white':'black'}}>
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>
            {isLogin ? 'Log in to your account' : 'Join our community today'}
          </p>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button 
              className="switch-btn" 
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? ' Sign up' : ' Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;