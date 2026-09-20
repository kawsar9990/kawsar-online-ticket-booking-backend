import express from 'express';
import { getHotelDetailsBySlug } from './hotelDetails.controller.js';

const router = express.Router({ mergeParams: true });


router.get('/', getHotelDetailsBySlug);

export const HotelDetailsRoutes = router;