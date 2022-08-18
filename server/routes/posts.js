import express from 'express';
import {getPosts, createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
//patch is used for updating existing documents
//the color in /:id is to make it dynamic
router.patch('/:id', updatePost);
export default router;