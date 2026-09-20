import type { Request, Response } from 'express';
import { getHotelDetailsBySlugFromDB } from './hotelDetails.service.js';

export const getHotelDetailsBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing slug parameter',
      });
    }

    const result = await getHotelDetailsBySlugFromDB(slug);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Hotel details not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Hotel details fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hotel details',
      error: error instanceof Error ? error.message : error,
    });
  }
};