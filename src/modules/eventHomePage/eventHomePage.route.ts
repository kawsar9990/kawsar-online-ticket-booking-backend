import { Router } from 'express';
import { getFeaturedEventDeals } from './eventHomePage.controller.js';

const router = Router();

router.get('/', getFeaturedEventDeals);

export const EventHomePageRoutes = router;