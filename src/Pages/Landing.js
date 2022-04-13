 import './Pages.css'
 import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
    <div className="landing-bg">
      <div className="landing-col1">
        
      </div>
      <div className="landing-col2">
        <div className='landing-contents'>
          <h1 className='landing-cont-item'>Join The Buzz!</h1>
          <section className='landing-cont-item'>
            <Link className='landing-btn' to='/Signup'>Signup</Link>
            </section>
          <h5 className='landing-cont-item'>Already have an account?</h5>
          <section className='landing-cont-item'>
            <Link className='landing-btn' to='/Login'>Login</Link>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
