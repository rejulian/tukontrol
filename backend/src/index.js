import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { userRouter } from './routes/userRoutes.js';
import { clientRouter } from './routes/clientRoutes.js';

const app = express();

app.use(express.json())
app.use(cors());

// ROUTES
app.use('/api/v1/users', userRouter)
app.use('/api/v1/clients', clientRouter)

app.get('/health', (req, res) => {
    res.send("OK!")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on http://localhost:${process.env.PORT}/`);
})