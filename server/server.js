import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import postsRouter from './routes/posts.js'

dotenv.config();


const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))



app.use('/posts', postsRouter);


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    })
}).catch(err => {
    console.log(err);
})




