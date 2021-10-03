import { Button, Paper, TextField, Typography, } from '@mui/material';
import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../redux/actions/actions'




const useStyle = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
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
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
}))

export default function Forms({ currentId, setCurrentId }) {
    const initialState = { creator: '', title: '', message: '', tags: [], selectedFile: '' };
    const [postData, setPostDate] = useState(initialState);
    const post = useSelector(state => currentId ? state.posts.posts.find(p => p._id === currentId) : null)
    const classes = useStyle();
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostDate(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        if (currentId) {
            setPostDate(post);
        }
    }, [currentId, post])

    const submit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }
        else {
            dispatch(createPost(postData));
        }
        setCurrentId(null);
        setPostDate(initialState);
    }
    const clear = (e) => {
        e.preventDefault();
        setCurrentId(null);
        setPostDate(initialState);
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate method="POST" className={classes.form}>
                <Typography variant="h5">{currentId ? "Editing" : "Creating"} a memory</Typography>
                <TextField name="title" label="Title" onChange={handleChange} fullWidth value={postData.title} size="small" />
                <TextField name="creator" label="Creator" onChange={handleChange} fullWidth value={postData.creator} size="small" />
                <TextField name="message" label="Message" onChange={handleChange} fullWidth value={postData.message} size="small" />
                <TextField name="tags" label="Tags" onChange={(e) => setPostDate({ ...postData, tags: e.target.value.split(',') })} fullWidth value={postData.tags} size="small" />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostDate({ ...postData, selectedFile: base64 })} />
                </div>
                <Button variant="contained" onClick={submit} fullWidth>Submit</Button>
                <Button variant="contained" onClick={clear} color="secondary" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
