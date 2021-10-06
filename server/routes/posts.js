import express from 'express';
import { createPost, readPosts, updatePost, deletePost, likePost } from '../controller/posts.js';

const router = express.Router();
import auth from '../middleware/auth.js'

router.get('/', readPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likes', auth, likePost);
router.delete('/:id', auth, deletePost);

export default router;
