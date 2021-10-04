import { Avatar, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@mui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';
import { registerInitiate, signIn } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

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

export default function Register() {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: ""
    }
    const [user, setUser] = useState(initialState);
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.userR);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(user));
        setUser(initialState);
    }
    const googleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn());

    }
    const classes = useStyle();
    return (

        loading ?
            (<div style={{ margin: "10px 50%" }}><CircularProgress sx={{ color: "black" }} /> </div>) :

            (<Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate method="POST" className={classes.form}>
                        <Avatar style={{ backgroundColor: "purple" }}>
                            <LockOpenIcon ></LockOpenIcon>
                        </Avatar>
                        <Typography variant="h5"> Sign Up</Typography>
                        <div className={classes.name}>
                            <TextField name="firstName" label="First Name" onChange={handleChange} fullWidth autoFocus value={user.firstName} required size="small" />
                            <TextField name="lastName" label="Last Name" onChange={handleChange} fullWidth value={user.lastName} required size="small" />
                        </div>
                        <TextField name="email" label="Email" onChange={handleChange} fullWidth value={user.email} required size="small" />
                        <TextField name="password" label="Password" onChange={handleChange} fullWidth value={user.password} required size="small" />
                        <TextField name="cpassword" label="Confirm Password" onChange={handleChange} fullWidth value={user.cpassword} required size="small" />
                        <Button variant="contained" onClick={submit} fullWidth>Sign Up</Button>
                        <Button variant="contained" onClick={googleSignIn} fullWidth><GoogleIcon fontSize="small" />GOOGLE SIGN IN</Button>
                    </form>
                </Paper>

            </Container>)

    )
}
