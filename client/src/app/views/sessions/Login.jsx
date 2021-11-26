import React, { useState } from 'react'
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import clsx from 'clsx'
import Mixin from '../../components/Notification/Mixin';
import history from '../../../history';
import { authentication } from "../../../services/index"

const useStyles = makeStyles(({ pallete, ...theme }) => ({
  cardHolder: {
    minHeight: '100vh !important',
    background: 'linear-gradient(37deg, rgba(255,255,255,1) 0%, rgba(196,0,0,1) 100%)',
  },
  card: {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))


const Login = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })
  const [message, setMessage] = useState('')


  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo }
    temp[name] = value
    setUserInfo(temp)
  }

  const handleChangePassword = (prop) => (event) => {
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setUserInfo({ ...userInfo, showPassword: !userInfo.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (event) => {
    setLoading(true)
    authentication(userInfo).then(response => {
      if (response.data.state) {
        Mixin('Logueago exitosamente', 'success');
        history.push('/colaborator')
      } else {
        Mixin('Usuario no existe', 'error');
      }
      setLoading(false)
    })
    event.preventDefault();
  }

  return (
    <div
      className={clsx(
        'd-flex align-items-center justify-content-center',
        classes.cardHolder
      )}
    >
      <Card className={classes.card}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12} className="d-flex align-items-center justify-content-center">
            <div className="p-4">
              <img
                style={{ width: 230 }}
                src="/assets/images/dreamer.svg"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="p-4 bg-light text-center">
              <h4 className="text-center mb-3">Inicio de Sesión</h4>
              <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                  className="mb-3 w-75"
                  variant="outlined"
                  size="small"
                  placeholder="Email"
                  onChange={handleChange}
                  type="email"
                  name="username"
                  value={userInfo.username}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'this field is required',
                    'email is not valid',
                  ]}
                />
                <FormControl
                  className="mb-3 w-75"
                  size="small"
                >
                  <OutlinedInput
                    variant="outlined"
                    placeholder="Password"
                    name="password"
                    type={userInfo.showPassword ? 'text' : 'password'}
                    value={userInfo.password}
                    onChange={handleChangePassword('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {userInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControlLabel
                  className="mb-3 min-w-300"
                  name="agreement"
                  onChange={handleChange}
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      size="small"
                      color="primary"
                      onChange={({
                        target: { checked },
                      }) =>
                        handleChange({
                          target: {
                            name: 'agreement',
                            value: checked,
                          },
                        })
                      }
                      checked={userInfo.agreement || true}
                    />
                  }
                  label="Remeber me"
                />
                {message && (
                  <p className="text-error">{message}</p>
                )}

                <div className="row mb-4 justify-content-center">
                  <Button
                    className="w-50"
                    variant="contained"
                    color="secondary"
                    disabled={loading}
                    type="submit"
                  >
                    Sign in
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={
                        classes.buttonProgress
                      }
                    />
                  )}
                  <span className="mr-2 ml-5">or</span>
                  <Button
                    className="capitalize w-50"
                  /* onClick={() =>
                   //  history.push('/session/signup')
                   }*/
                  >
                    Sign up
                  </Button>
                </div>
                <Button
                  className="text-primary"
                /* onClick={() =>
                  // history.push('/session/forgot-password')
                 }*/
                >
                  Forgot password?
                </Button>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Login;
