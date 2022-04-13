
import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Landing from './Landing'

function Login() {
    /* Registration  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* Confirmation */
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Handlers */
  const handleEmail = (e) =>{
    setEmail(e.target.value);
    setSubmitted(false);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
    setSubmitted(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  }

  /* Submit Messages */
  const errorMessage = ()=>{
    return(
      <div style={{display: error? "" : "none", color:"red", textAlign:"center",}}>
        Please fill all fields!
      </div>
    )
  }
  const successMessage = () => {
    return (
      <>
        {/* HTTP REQUEST CODE HERE */}
      </>
    );
  }

  return (
    <>
    <div className='login-bg'>
      <div className='container'>
        <Link className='return-btn' to='/'>
          <i className='material-icons' style={{fontSize:"2em"}}>chevron_left</i>
        </Link>
        {/* <form className='signup-form' action="/signup" method='post' id='signup'> */}
        <form className='container-form'  id='signup'>
          <h3 style={{marginLeft:"auto", marginRight:"auto"}}>Sign in</h3>
          {errorMessage()}

          <label>Email</label>
          <input className='form-input' type="email"  onChange={handleEmail} value={email}/>

          <label>Password</label>
          <input className='form-input' type="password"  onChange={handlePassword} value={password}/>
          {successMessage()}

          <section className='submit-sec'>
            <button className='submit-button' type="submit" onClick={handleSubmit} >
              Next
            </button>
          </section>
        </form>

      </div>
    </div>
    </>
  )
}

export default Login