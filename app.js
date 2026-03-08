import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './Routes/app.routes.js'
import teamRouter from './Routes/team.routes.js'
// import taskRouter from './Routes/task.routes.js'

dotenv.config({ path: '.env' });
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', userRouter);
app.use('/api', teamRouter);
// app.use('/api', taskRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to DB successfully');
    app.listen(port, (err) => {
        if (err) {
            return console.log('Something bad happened', err);
        }
        console.log(`We are listening at port number ${ port }...`);
    })
}).catch(err => {
    console.log('Error in connecting with the DB: ', err);
})

