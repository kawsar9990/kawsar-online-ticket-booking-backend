import { Router } from 'express';
import { getFeaturedHotelDeals } from './hotelHomePage.controller.js';

const router = Router();

router.get('/', getFeaturedHotelDeals);

export const HotelHomePageRoutes = router;