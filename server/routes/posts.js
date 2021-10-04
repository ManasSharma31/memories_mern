import express from 'express';
import { createPost, readPosts, updatePost, deletePost, likePost } from '../controller/posts.js';

const router = express.Router();


router.get('/', readPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch('/:id/likes', likePost);
router.delete('/:id', deletePost);

export default router;
