import Posts from '../models/posts.js';

import mongoose from 'mongoose';


export const readPosts = async (req, res) => {
    try {

        const posts = await Posts.find();
        res.status(200).send(posts);
    }
    catch (error) {
        res.status(404).send({ message: error.message })
    }
}
export const createPost = async (req, res) => {

    const content = req.body;

    const post = new Posts(content);
    try {

        await post.save();
        res.status(201).send(post);
    }
    catch (error) {
        res.status(409).send({ message: error.message })
    }
}

export const updatePost = async (req, res) => {


    const id = req.params.id;
    console.log(id);


    var post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`${id} id not found`);
    }
    post =
    {
        ...post,
        _id: id
    };
    await Posts.findByIdAndUpdate(id, post, { new: true })
    res.status(200).send(post);
}

export const deletePost = async (req, res) => {

    const id = req.params.id;
    console.log("I was called", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`${id} id not found`);
    }
    try {
        await Posts.findByIdAndRemove(id);
        res.status(200).send({ message: "Successfully deleted" });
    }
    catch (error) {
        res.status(404).send("Item cannot be deleted due to some issue");
    }
}