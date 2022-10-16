import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Password dosen't match.");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
      console.log(user);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
              ref={username}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="registerInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
              ref={password}
              required
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
              ref={confirmPassword}
              required
            />
            <button className="registerBtn" type="submit">
              Sign Up
            </button>
            <span className="forgotPassword">
              Already have an account?{' '}
              <Link to={'/login'} className="registerLoginLink">
                Login
              </Link>
            </span>
          </form>
        </div>
        <div className="registerRight">
          <h3 className="registerRightTitle">Join Facebook</h3>
          <span className="registerRightDesc">
            Contact with world wide friends.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
