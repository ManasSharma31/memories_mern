import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/actions/user';

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        color: "white",
        height: "60px",
        justifyContent: "space-between"
    },
    appbar: {
        position: "fixed",
        // top: "0"

    },
    left: {
        display: "flex",
        alignItems: "center",
        marginRight: "10px"
    },
    right: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        "& >*": {
            marginRight: "5px"
        }
    }
}))
export default function Header() {

    const { user } = useSelector(state => state.userR);
    const classes = useStyle();
    const dispatch = useDispatch();
    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.root}>
                <div className={classes.left}>
                    <Typography variant="h5" align="center" component="div">
                        Memories
                    </Typography>
                    <img src="/images/memories.png" height="50" alt="logo" ></img>
                </div>

                {
                    user ? (<div className={classes.right}>
                        <Typography variant="body2" component="p" name="title" >{user?.displayName}</Typography>
                        <Avatar src={user.photoURL} alt={user.displayName}>{user?.displayName.charAt(0)}</Avatar>
                        <Button variant="contained" style={{ backgroundColor: "red" }} size="small" onClick={() => dispatch(logoutInitiate())}>Log out</Button>
                    </div>) : <Button component={Link} to="/auth" variant="contained">Sign Up</Button>
                }

            </Toolbar>
        </AppBar >
    )
}
