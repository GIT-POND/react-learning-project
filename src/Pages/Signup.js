import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from '../API/axios';
const REGISTER_URL = '/users/new_user';


function Signup() {
  // ###### USE REFS ##### 
  const inputRef = useRef();
  const errRef = useRef();


  // ###### USE STATES ##### 
  const [user_, setUser] = useState('');                        // Username : string
  const [email_, setEmail] = useState('');                      // Email    : string
  const [password_, setPassword] = useState('');                // Password : string
  const [pwFocus, setPWFocus] = useState('');                   // PWFocus  : boolean

  const [match_, setMatch] = useState('');                      // Confirm Password : string
  const [validPassword, setValidPassword] = useState(false);    // Validate Password : boolean

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  // ###### USE EFFECTS ##### 
  useEffect(()=>{
    //   When the component renders, focus is put on the    
    //   username input. This way, the user can start       
    //   writing their login credentials without clicking   
    //   on the e-mail input.                               

    inputRef.current.focus();
  },[])

  useEffect(()=>{
    //   changing password_ or match_ will trigger a check  

    setValidPassword(match_ === password_) // passes in a boolean
  },[password_, match_])

  useEffect(()=>{
    //   changing any input field will reset the error message  

    setErrMsg('');
  },[user_, email_, password_, match_])


  // ###### HANDLERS ###### 
  const handleSubmit = async (e) =>{
    //   {async} enables your program to start a potentially 
    //   long-running task, and then rather than having to 
    //   wait until that task has finished, to be able to 
    //   continue to be responsive to other events while the 
    //   task runs. Once the task is completed, your program 
    //   is presented with the result.

    e.preventDefault();

    if (validPassword === false) {
      setErrMsg("Passwords Dont Match!")
      return;
    }

    try{
      const response = await axios.post( REGISTER_URL, JSON.stringify({
        user_name:  user_, 
        email:      email_, 
        password:   password_
      }),{
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        withCredentials: true
      });

      // console.log(response.data)
      console.log(response.accessToken)
      // console.log(JSON.stringify(response))
      setSuccess(true);
      //    user_name: carlos       
      //    email: carlos@gmail.com 
      //    password: 12345         
      
    }catch (err) {
        if(!err?.response){ // No connnection to API
          setErrMsg('No Server Response')
        } else if (err.response?.status === 409){ // Username taken
          setErrMsg('Username Taken')
        } else { // Any other error
          setErrMsg('Registration Failed')
        }

        errRef.current.focus(); // Bring error into focus
    }

     setUser('');
      setEmail('');
      setPassword('');
      setMatch('');
  }



  return (
    <>
    {success? ( 
      // ~~~~~~ SUCCESS DIV ~~~~~~ 
      <div className='signup-bg'>
        <div className='container' >
            <section className='success-container'>
              <h2>Success!</h2> 
              <Link to={'/Login'}>Sign In</Link>
            </section>
        </div>
      </div>

     ):(

    // ~~~~~~ SIGNUP DIV ~~~~~~ 
    <div className='signup-bg'>
      <div className='container'>
        <Link className='return-btn' to='/'>
          <i className='material-icons' style={{fontSize:"2em"}}>chevron_left</i>
        </Link>

        <form className='container-form' onSubmit={handleSubmit}>
          <h3>Create your account</h3>
          <p ref={errRef} className={errMsg? "errmsg":"none"} style={{color:"red"}}>{errMsg}</p>


          <label htmlFor='user_'>Username</label>
          <input 
            type="text"
            id='user_'
            required
            ref={inputRef}
            autoComplete='off'
            className='form-input' 
            onChange={(e)=> setUser(e.target.value)}
            />


          <label htmlFor='email_'>Email</label>
          <input 
            type="email" 
            id='email_'
            required
            autoComplete='off'
            className='form-input' 
            onChange={(e)=>setEmail(e.target.value)} 
            />


          <label htmlFor='password_'>Password</label>
          <p id='password_'
            style={{display: pwFocus? "" : "none", 
            backgroundColor:'rgba(1, 1, 1, 0.05)' , 
            fontSize:".75em", 
            borderRadius:".33em", 
            padding:".25em 1em",
            }}>
              8 to 24 characters.<br/>
              Must include uppercase letters, lowercase<br/>
               letters, numbers and special characters.
            </p>
          <input 
            type="password" 
            id='password_'
            required
            autoComplete='off'
            className='form-input'  
            onChange={(e)=>setPassword(e.target.value)} 
            onFocus={()=>setPWFocus(true)}
            onBlur={()=>setPWFocus(false)}
            />


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
            />

        
            <button 
            type="submit" 
            className='submit-button' 
            >
              Create Account
            </button>
            <p className='redirect-signin'>Already have an account? <Link to={"/Login"}>Sign In</Link> </p>
        </form>

      </div>
    </div>
    )}
    </>
    
  )
}

export default Signup