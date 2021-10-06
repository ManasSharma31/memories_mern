import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../redux/actions/actionTypes'



const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        color: "white",
        height: "60px",
        justifyContent: "space-between"
    },
    appbar: {
        position: "fixed",
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

    // const { user } = useSelector(state => state.userR);
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


    const { user } = useSelector(state => state.user);

    const history = useHistory();
    const logout = () => {

        dispatch({
            type: types.LOGOUT
        });
        history.push("/auth");
    }
    // useEffect(() => {
    //     // const token = user?.token;

    //     // setUser(JSON.parse(localStorage.getItem("profile")))
    // }, [user])

    const classes = useStyle();
    const dispatch = useDispatch();
    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.root}>
                <div className={classes.left}>
                    <Typography variant="h5" align="center" component="div" fontWeight="fontWeightBold" sx={{ letterSpacing: "2px", background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)" }}>
                        Memories
                    </Typography>
                    <img src="/images/memories.png" height="50" alt="logo" ></img>
                </div>

                {
                    user ? (<div className={classes.right}>
                        <Typography variant="body2" component="p" name="title" >{user.result.name}</Typography>
                        <Avatar src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                        <Button variant="contained" style={{ backgroundColor: "red" }} size="small" onClick={() => logout()}>Log out</Button>
                    </div>) : <Button component={Link} to="/auth" variant="contained">Sign In</Button>
                }

            </Toolbar>
        </AppBar >
    )
}
