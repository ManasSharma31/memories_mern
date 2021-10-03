import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        color: "white",
        height: "60px"
    },
    appbar: {
        position: "fixed",
        // top: "0"

    }
}))
export default function Header() {
    const classes = useStyle();
    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.root}>
                <Typography variant="h5" align="center" component="div">
                    Memories
        </Typography>
                <img src="/images/memories.png" height="50" alt="logo" ></img>

            </Toolbar>
        </AppBar >
    )
}
