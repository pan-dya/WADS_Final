import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confPwd, setConfpwd] = useState('');
    const [msg, setMsg]= useState('');
    const navigate = useNavigate();

    const Register = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: pwd,
                confPassword: confPwd
            });
            navigate("/login");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg); 
            }
        }
    }
    
  return(
    <section className="hero has-background-grey-light is-fullwidth is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Register} className="box ">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">E-mail</label>
                  <div className="control">
                    <input type="text" className="input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" className="input" placeholder="*********" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input type="password" className="input" placeholder="*********" value={confPwd} onChange={(e) => setConfpwd(e.target.value)}/>
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) 
} 

export default Register