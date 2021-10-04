import { Avatar, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import { loginInitiate, signIn } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
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
}));
export default function Login() {
    const initialState = {
        email: "",
        password: "",
    }
    const [user, setUser] = useState(initialState);
    const dispatch = useDispatch();
    const classes = useStyle();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(loginInitiate(user.email, user.password));
        setUser(initialState);
    }
    const googleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn());
    }
    const { error } = useSelector(state => state.userR);
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <form className={classes.form}>
                    <Avatar style={{ backgroundColor: "purple" }}>
                        <LockOpenIcon ></LockOpenIcon>
                    </Avatar>
                    <Typography variant="h5"> Sign In</Typography>
                    <TextField name="email" label="Email" onChange={handleChange} fullWidth value={user.email} required size="small" />
                    <TextField name="password" label="Password" onChange={handleChange} fullWidth value={user.password} type="password" required size="small" />
                    <Button variant="contained" onClick={submit} fullWidth>SIGN IN</Button>
                    <Button variant="contained" onClick={googleSignIn} fullWidth startIcon={<GoogleIcon fontSize="small" />}>GOOGLE SIGN IN</Button>
                </form>
                {error && <Typography variant="body2" style={{ color: "red" }}>**{error}</Typography>}
            </Paper>
        </Container>
    )
}
