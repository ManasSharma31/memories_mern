import { Avatar, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@mui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GoogleLogin } from 'react-google-login';
import { signIn, signUp } from '../redux/actions/user';
import * as types from '../redux/actions/actionTypes'

const useStyle = makeStyles(theme => ({

    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(10),


    },
    form:
    {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        '& Button': {
            margin: "5px 0"
        }

    },
    name: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}))

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: ""
}

export default function Register() {

    const [user, setUser] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector(state => state.user);
    const [showPass, setShowPass] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const googleFailure = (error) => {
        console.log(error);
        dispatch({
            type: types.ERROR,
            payload: "Opps ! Something went wrong"
        })
    }
    const googleSuccess = async (res) => {
        console.log("Google user", res);
        const result = res?.profileObj;
        const token = res?.tokenId;

        dispatch({
            type: types.AUTH,
            data: { result, token }
        })
        history.push("/");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("I was called");
        if (isSignUp) {
            dispatch(signUp(user, history));
        }
        else {
            dispatch(signIn(user, history));
        }
    }

    const classes = useStyle();
    return (


        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <form autoComplete="off" noValidate method="POST" className={classes.form} onSubmit={handleSubmit}>
                    <Avatar style={{ backgroundColor: "purple" }}>
                        <LockOpenIcon ></LockOpenIcon>
                    </Avatar>
                    <Typography variant="h5"> {isSignUp ? "Sign Up" : "Sign In"}</Typography>
                    {
                        isSignUp && (<div className={classes.name}>
                            <TextField name="firstName" label="First Name" onChange={handleChange} fullWidth autoFocus value={user.firstName} required size="small" />
                            <TextField name="lastName" label="Last Name" onChange={handleChange} fullWidth value={user.lastName} required size="small" />
                        </div>)
                    }
                    <TextField name="email" label="Email" onChange={handleChange} fullWidth value={user.email} required size="small" />
                    <TextField name="password" label="Password" onChange={handleChange} fullWidth value={user.password} required size="small" type={showPass ? "text" : "password"} InputProps={{
                        endAdornment: (<InputAdornment position="end">
                            <IconButton onClick={() => setShowPass((prev) => !prev)}>
                                <VisibilityIcon />
                            </IconButton>
                        </InputAdornment>)
                    }} />
                    {isSignUp &&
                        <TextField name="cpassword" label="Confirm Password" onChange={handleChange} fullWidth value={user.cpassword} required size="small" />
                    }
                    <Button variant="contained" type="submit" fullWidth>{isSignUp ? "Sign Up" : "Sign In"}</Button>
                    <GoogleLogin
                        clientId="862817458747-204lqoglmeo00flvhing60nvr1eihtrk.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled} fullWidth startIcon={<GoogleIcon fontSize="small" />}>GOOGLE SIGN IN</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"

                    />
                    {error && <Typography variant="body2" component="p" sx={{ color: "red" }}>**{error}</Typography>}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button size="small" style={{ color: "black" }} onClick={() => setIsSignUp((prev) => !prev)}> {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</Button>

                        </Grid>
                    </Grid>


                </form>
            </Paper>

        </Container >

    )
}
