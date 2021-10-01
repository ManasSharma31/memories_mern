import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    image: String,
    likesCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Posts = mongoose.model("postCollections", postSchema);
export default Posts;