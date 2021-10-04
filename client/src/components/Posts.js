import { Grid, CircularProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';

export default function Posts({ setCurrentId }) {
    const { posts } = useSelector(state => state.posts);
    console.log(posts);
    return (
        !posts.length ? <div style={{ margin: "10px 50%" }}><CircularProgress sx={{ color: "black" }} /> </div> :
            (<Grid container justifyContent="space-between" alignItems="stretch" spacing={3} sx={{
                marginBottom: "50px"
            }}>
                {
                    posts.map(post => (
                        <Grid item xs={12} sm={6} key={post._id}>
                            <SinglePost post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>)
    )
}
