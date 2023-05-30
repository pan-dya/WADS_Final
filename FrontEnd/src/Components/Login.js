import {useRef,useState,useEffect} from 'react';
import "../Design/Login.css";
import Register from "./Register.js"

const Login= () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user,pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }
  return (
    <>
      {success ? (
        <section>
          <h1>You Are Logged in!</h1>
          <br />
          <p>
              <a href="/">Go To Home Page</a>
          </p>
        </section>
      ):(
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live = "assertive">{errMsg}</p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type="text" id="username" ref={userRef} autoComplete='off' onChange={(e)=> setUser(e.target.value)} value={user} required/>
        <label htmlFor='password'>password:</label>
        <input type="password" id="password" onChange={(e)=> setPwd(e.target.value)} value={pwd} required/>
        <button>Log In</button>
      </form>
      <p>Need an Account<br />
          <span className='line'>{/*router link*/}
          <a href="/register">Register</a>
        </span>
      </p>
    </section>
      )}
    </>
  )
}

export default Login;