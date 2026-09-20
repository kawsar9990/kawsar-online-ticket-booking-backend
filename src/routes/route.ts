import { Router } from "express";

import { HotelHomePageRoutes } from "../modules/hotelHomePage/hotelHomePage.route.js";
import { helpcenterroute } from "../modules/helpCenter/helpCenter.route.js";
import { CityDestinationRoutes } from "../modules/cityDestination/cityDestination.route.js";
import { HotelDetailsRoutes } from "../modules/hotelDetailsPage/hotelDetails.routes.js";

const router = Router();

router.use("/hotel-homepage", HotelHomePageRoutes);
router.use("/help-center-data", helpcenterroute);
router.use("/city-destinations", CityDestinationRoutes);
router.use("/hotel-deal/:slug", HotelDetailsRoutes);

export default router;