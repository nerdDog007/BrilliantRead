import express from 'express';
import cors from 'cors';

// import userRoutes from './routes/userRoutes.js';
import userRoute from './routes/UserRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);

export default app;