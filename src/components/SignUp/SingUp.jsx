import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/Login/login.scss';
import photo from '../../assets/photo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sinupUser } from '../../actions/User';

const SignUp = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp = (e) => {

    e.preventDefault();
    dispatch(sinupUser(name, userName, email, password))
    navigate('/verify')
  };


  return (
    <main id="login_page">
      <div className="brandImage login_box">
        <img src={photo} alt="" />
      </div>
      <div className="form_area login_box">
        <div className="login_form">
          <h1>Social App</h1>
          <p>Login up to see photos and videos</p>
          <form onSubmit={handleSignUp}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="SignUp" />
          </form>
        </div>
        <div className="signup_link login_form">
          <span>Already have an account?</span>
          <Link to="/">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
