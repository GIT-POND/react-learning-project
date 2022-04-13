import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from '../API/api';
const REGISTER_URL = '/users/new_user';


function Signup() {
  // ###### USE REFS ##### 
  const userRef = useRef();
  const errRef = useRef();

  // ###### USE STATES ##### 
  const [user_, setUser] = useState(''); // tied to user input
  const [userFocus, setUserFocus] = useState(false); // tied to focus on input field

  const [email_, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);

  const [password_, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false); // to validate matching passwords
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [match_, setMatch] = useState('');
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // ###### USE EFFECTS ##### 

  useEffect(()=>{
    // ~ NOT SURE
    userRef.current.focus(); // set focus on username input
  },[])

  useEffect(()=>{
    console.log(`user:${user_}`);
  },[user_])

  useEffect(()=>{
    console.log(`email:${email_}`)
  },[email_])

  useEffect(()=>{
    //   changing the password or match will trigger another check
    console.log(`password:${password_}, match:${match_ === password_}`)
    setValidPassword(match_ === password_) // ensures passwords match
  },[password_, match_]) // every time values changes, useEffect is executed

  useEffect(()=>{
    //   changing any of the states will reset the error message
    setErrMsg('');
  },[user_, email_, password_, match_])



  return (
    <>
    <div className='signup-bg'>
      <div className='container'>
        <Link className='return-btn' to='/'>
          <i className='material-icons' style={{fontSize:"2em"}}>chevron_left</i>
        </Link>

        <form className='container-form'>
          <h3>Create your account</h3>
          <p ref={errRef} className={errMsg? "errmsg":"none"}>{errMsg}</p>


          <label htmlFor='user_'>Username</label>
          <input 
            type="text"
            id='user_'
            required
            ref={userRef}
            autoComplete='off'
            className='form-input' 
            onChange={(e)=> setUser(e.target.value)}
            onFocus={()=>setUserFocus(true)}
            onBlur={()=>setUserFocus(false)}
            />
            {/* <p id='user_'
            style={{display: userFocus? "" : "none", 
            color:"white", 
            backgroundColor:'rgba(1, 1, 1, 0.75)' , 
            fontSize:".75em", 
            borderRadius:"1em", 
            padding:".25em 1em",
            }}>
              8 to 24 characters.<br/>
              Must include uppercase letters<br/> 
              lowercase letters, and numbers.
            </p> */}


          <label htmlFor='email_'>Email</label>
          <input 
            type="email" 
            id='email_'
            required
            ref={userRef}
            autoComplete='off'
            className='form-input' 
            onChange={(e)=>setEmail(e.target.value)} 
            onFocus={()=>setEmailFocus(true)}
            onBlur={()=>setEmailFocus(false)}
            />


          <label htmlFor='password_'>Password</label>
          <input 
            type="password" 
            id='password_'
            required
            autoComplete='off'
            className='form-input'  
            onChange={(e)=>setPassword(e.target.value)} 
            onFocus={()=>setPasswordFocus(true)}
            onBlur={()=>setPasswordFocus(false)}
            />
            {/* <p id='password_'
            style={{display: passwordFocus? "" : "none", 
            color:"white", 
            backgroundColor:'rgba(1, 1, 1, 0.75)' , 
            fontSize:".75em", 
            borderRadius:"1em", 
            padding:".25em 1em",
            }}>
              8 to 24 characters.<br/>
              Must include uppercase and lowercase<br/>
               letters, numbers and special characters.
            </p> */}


            <label htmlFor='match_'>Confirm Password
              {/* <i
               className='material-icons'
               style={{display: validPassword && !(match_ === '')? "" : "none", fontSize:"1em", color:"green",margin:"0",padding:"0"}}
              >check</i> */}
            </label>
            <input 
            type="password" 
            id='match_'
            required
            autoComplete='off'
            className='form-input'  
            onChange={(e)=>setMatch(e.target.value)} 
            onFocus={()=>setMatchFocus(true)}
            onBlur={()=>setMatchFocus(false)}
            />

        
            <button 
            type="submit" 
            className='submit-button' 
            // disabled={user_ && email_ && password_ && match_? false:true}
            onFocus={()=>setMatchFocus(true)}
            onBlur={()=>setMatchFocus(false)}
            >
              Create Account
            </button>
            <p className='redirect-signin'>Already have an account? <Link to={"/Login"}>Sign In</Link> </p>
        </form>

      </div>
    </div>
    </>
  )
}

export default Signup