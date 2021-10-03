import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/actions.js'

const useStyle = makeStyles(theme => ({
    card: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        justifyContent: 'space-between',

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        objectFit: "contain",
        // maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7))"

    },

    overlay1: {
        position: "absolute",
        top: "20px",
        color: "white",
        zIndex: "100",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
}))


export default function SinglePost({ post, setCurrentId }) {
    const classes = useStyle();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card} sx={{ maxWidth: 345, borderRadius: "10px" }}>
            <CardMedia
                className={classes.media}
                // component="img"
                height="140"
                image={post.selectedFile || '/images/default.jpg'}
                alt="green iguana"
            />
            <CardContent>
                <div className={classes.overlay1}>
                    <div>
                        <Typography variant="h5" component="div">
                            {post.creator}
                        </Typography>
                        <Typography variant="body2" component="p" >
                            {moment(post.createdAt).fromNow()}
                        </Typography>
                    </div>
                    <Button size="small" style={{ color: "white" }} onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="small" /></Button>
                </div>
                <div>
                    <Typography variant="body2" fontWeight="fontWeightBold" color="textSecondary">{post?.tags.map(t => `#${t} `)}</Typography>
                    <Typography variant="h6" >{post.title}</Typography>
                    <Typography variant="body2" component="p" color="textSecondary">
                        {post.message}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" style={{ fontSize: "8px" }} variant="outlined"><ThumbUpAltIcon fontSize="small" style={{ fontSize: "10px", marginRight: "2px" }} />Likes {post.likesCount}</Button>
                <Button size="small" variant="outlined" style={{ fontSize: "8px" }} onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" style={{ fontSize: "10px", marginRight: "2px" }} />Delete</Button>
            </CardActions>
        </Card>
    )
}
