import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import { AuthContext } from './../../context/AuthContext';
import { loginCall } from './../../apiCalls';
import { CircularProgress } from '@mui/material';

const Login = (e) => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLeftTitle">Facebook Login</h3>
          <span className="loginLeftDesc">
            Contact with world wide friends.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              minLength={6}
              ref={password}
              required
            />
            <button className="loginBtn" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress sx={{ color: 'white' }} size={30} />
              ) : (
                'Log In'
              )}
            </button>
            <span className="forgotPassword">Forgot password?</span>
            <hr />
            <div className="loginRegister">
              <Link to={'/register'}>
                <button className="loginRegisterBtn">Create new account</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
