// src/pages/Login.js
import React from 'react';
import '../styles/login.css';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
