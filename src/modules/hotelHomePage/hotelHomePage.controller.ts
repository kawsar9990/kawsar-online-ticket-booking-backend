import type { Request, Response } from 'express';
import { getFeaturedHotelDealsFromDB } from './hotelHomePage.service.js';


export const getFeaturedHotelDeals = async (req: Request, res: Response) => {
try{
const result = await getFeaturedHotelDealsFromDB();
res.status(200).json({
      success: true,
      message: 'Featured hotel deals fetched successfully',
      data: result,
});
}
catch(error){
res.status(500).json({
      success: false,
      message: 'Failed to fetch featured hotel deals',
      error: error instanceof Error ? error.message : error,
    });
}
}