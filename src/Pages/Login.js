
import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Landing from './Landing'

function Login() {
    /* Registration  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* Confirmation */
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setErrMsg('Missing Credentials');
      return;
    } 

    try{
      console.log(`Credentials =[ email:${email} password:${password}]`)

    }catch (err){

    }
  }

  /* Submit Messages */
  const errorMessage = ()=>{
    return(
      <div style={{display: errMsg? "" : "none", color:"red", textAlign:"center",}}>
        {errMsg}
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
          <input className='form-input' type="email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>

          <label>Password</label>
          <input className='form-input' type="password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
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