import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="First Name"
              className="registerInput"
            />
            <input
              type="text"
              placeholder="Surname"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
            />
            <button className="registerBtn">Register</button>
            <span className="forgotPassword">
              Already have an account?{' '}
              <Link to={'/login'} className="registerLoginLink">
                Login
              </Link>
            </span>
          </div>
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
