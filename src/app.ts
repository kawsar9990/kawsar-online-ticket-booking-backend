import express from 'express';
import cors from 'cors';
import router from './routes/route.js';
import { startEventExpiryCron } from './modules/eventHomePage/eventExpiry.cron.js';
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to GoKawsar Backend API Server 🚀',
    })
})

app.use("/api", router);


startEventExpiryCron();

app.use((req, res) => {
    res.status(404).json({
        success : true,
        message: 'API Route Not Found!',
    })
})



export default app;