import express from 'express';
import cors from 'cors';
const app = express();
import { CityDestinationRoutes } from './modules/cityDestination/cityDestination.route.js';
import { helpcenterroute } from './modules/helpCenter/helpCenter.route.js';

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


app.use('/api/city-destinations', CityDestinationRoutes);
app.use("/api/help-center-data", helpcenterroute)


app.use((req, res) => {
    res.status(404).json({
        success : true,
        message: 'API Route Not Found!',
    })
})

export default app;