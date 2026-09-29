import type { Request, Response } from 'express';
import { getFeaturedEventFromDB } from './eventHomePage.service.js';


export const getFeaturedEventDeals = async (req: Request, res: Response) => {
try{
const result = await getFeaturedEventFromDB();
res.status(200).json({
      success: true,
      message: 'Featured Event fetched successfully',
      data: result,
});
}
catch(error){
res.status(500).json({
      success: false,
      message: 'Failed to fetch featured Event',
      error: error instanceof Error ? error.message : error,
    });
}
}