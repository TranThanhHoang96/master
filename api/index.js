import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import useRouter from './routes/users.js';
import authRouter from './routes/auth.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
    console.log('MongooseDB is connect'); 
 }).catch((err) => {
        console.log(err); 
})

const app = express();

    app.listen(3000, () => {
        console.log("server is running 3000!");
        
    });

    app.use('/api/user', useRouter );
    app.use('/api/auth', authRouter );
