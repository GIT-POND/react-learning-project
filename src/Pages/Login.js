
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../Context/AuthProvider';
import { Link} from "react-router-dom";
import Home from './Home';
import axios from '../API/axios';
const LOGIN_URL = '/login/';

function Login() {
  /*  GLOBAL CONTEXT   */
  const {setAuth} = useContext(AuthContext);
    /* Registration  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* Confirmation */
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  /* Form-data  */
  let loginFormData = new FormData(); // For passing form-data to axios


  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setErrMsg('Missing Credential(s)');
      return;
    } else{
      loginFormData.append('username',email);
      loginFormData.append('password', password);
    }

    try{

      const response = await axios.post(
        LOGIN_URL, loginFormData,
        {
          headers:{'Content-Type': 'application/json'},
          withCredentials:true
        }
      );
      const AccessToken = response?.data?.Token
      const TokenType = response?.data?.Token_type
      setAuth({email, password, AccessToken, TokenType})
      setSuccess(true);

    }catch (err){
      if (err.response?.status === 403)
      setErrMsg(err.response.data.detail)
    }finally{
      //clear data input
      setEmail('');
      setPassword('');
      loginFormData.delete('username');
      loginFormData.delete('password');
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


  useEffect(()=>{

    setErrMsg('');
  },[email, password])


  return (
    <>
      {success? (<Home/>)
      :
      (<div className='login-bg'>
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
    </div>)}
    </>
  )
}

export default Login