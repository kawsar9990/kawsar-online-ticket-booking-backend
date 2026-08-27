import express from 'express';
import { getCityDestinations } from './cityDestination.controller.js';

const router = express.Router();

router.get("/", getCityDestinations);
export const CityDestinationRoutes = router;