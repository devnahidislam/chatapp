import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerSchema } from '../../schema';
import { useFormik } from 'formik';
import { CircularProgress, Tooltip, Zoom, TextField } from '@mui/material';
import {
  signupFailed,
  signupStart,
  signupSuccess,
} from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    dispatch(signupStart());
    try {
      const res = await axios.post('/auth/register', values);
      dispatch(signupSuccess(res.data));
      actions.resetForm();
      res.status === 200 && navigate('/login');
    } catch (error) {
      dispatch(signupFailed());
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
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <Tooltip
              title={
                errors.username &&
                touched.username && <p className="error">{errors.username}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                size="small"
                margin="dense"
                type="text"
                autoComplete="name"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.email &&
                touched.email && <p className="error">{errors.email}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                margin="dense"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.password &&
                touched.password && <p className="error">{errors.password}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                margin="dense"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.confirmPassword &&
                touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                size="small"
                margin="dense"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword && touched.confirmPassword}
              />
            </Tooltip>

            <button className="registerBtn" disabled={!isValid} type="submit">
              {isSubmitting ? (
                <CircularProgress sx={{ color: 'white' }} size={30} />
              ) : (
                'Sign Up'
              )}
            </button>
            <span className="forgotPassword">
              Already have an account?_{' '}
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
