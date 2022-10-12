import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
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
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginBtn">Log In</button>
            <span className="forgotPassword">Forgot password?</span>
            <hr />
            <div className="loginRegister">
              <Link to={'/register'}>
                <button className="loginRegisterBtn">Create new account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
