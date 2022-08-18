import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
// every route inside the postRoutes will start with posts

// went to mongodb to create new cluster, get the website. connect and put in username password(in real life make sure to use secure username and password)
const CONNECTION_URL = 'mongodb+srv://sdsu:mnkay214@finalcluster.htubfzr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
// use mongoose to connect to database
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);