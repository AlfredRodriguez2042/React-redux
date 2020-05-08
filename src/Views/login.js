import React from "react"
import { Field, reduxForm } from "redux-form" // handleSubmit property
import { connect } from "react-redux"
import { compose } from "redux"
import FacebookLogin from "react-facebook-login" //  the Id is only for educational purposes
import GoogleLogin from "react-google-login" //  the Id is only for educational purposes, don't  copy create you selft
import { makeStyles } from "@material-ui/core/styles"
import { signIn, oauthGoogle, oauthFacebook } from "../redux/actions/Login"
import {
  Grid,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Paper,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    marginBottom: "10px",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = (props) => {
  const classes = useStyles()
  const handleOnSubmit = async (data) => {
    console.log("submiting:", data)
    await props.signIn(data, props)
    // props.history.push('/')
  }

  const responseGoogle = async (res) => {
    console.log("Google", res)
    await props.oauthGoogle(res.accessToken, props)
  }

  const responseFacebook = async (res) => {
    console.log("Facebook", res)
    await props.oauthFacebook(res.accessToken, props)
  }

  const { handleSubmit } = props // props of redux form

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        {/* <CssBaseline /> */}
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <div className="social-login">
                <div>
                  <Link> Or sign In usin third-party services</Link>{" "}
                </div>
                <FacebookLogin
                  appId="171335970085090" // Don't use this id, create you selft
                  autoLoad={false}
                  textButton="Facebook"
                  fields="name,email,picture"
                  callback={responseFacebook}
                  className="services" // custom class
                  size="small"
                />
                <GoogleLogin
                  clientId="499420307488-hj9l9h3amt5into76m9i0ntkaqcg9q4t.apps.googleusercontent.com" // Don't use this id, create you selft
                  buttonText="Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  style={{}}
                  className="services" // custom class
                />
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.login.errorMessage,
  }
}

const mapDispatchToProps = {
  signIn,
  oauthGoogle,
  oauthFacebook,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "signIn" })
)(Login)
