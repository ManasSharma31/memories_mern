import express from 'express';
import { createPost, readPosts, updatePost, deletePost } from '../controller/posts.js';

const router = express.Router();


router.get('/', readPosts);
router.post('/', createPost);
router.patch('/', updatePost);
router.delete('/', deletePost);

export default router;
