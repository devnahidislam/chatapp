import './login.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { loginSchema } from '../../schema';
import { CircularProgress } from '@mui/material';
import { loginFailed, loginStart, loginSuccess } from '../../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/login', values);
      dispatch(loginSuccess(res.data));
      res.status === 200 && navigate('/');
    } catch (error) {
      dispatch(loginFailed());
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });
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
          <form onSubmit={handleSubmit} autoComplete="off" className="loginBox">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'inputError' : 'loginInput'
              }
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? 'inputError'
                  : 'loginInput'
              }
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}

            <button className="loginBtn" disabled={!isValid} type="submit">
              {isSubmitting ? (
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
