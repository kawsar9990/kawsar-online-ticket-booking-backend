import express from 'express';
import { getEventDetailsBySlug } from './eventDetailsPage.controller.js';

const router = express.Router({ mergeParams: true });


router.get('/', getEventDetailsBySlug);

export const EvenrDetailsRoutes = router;