import type { Request, Response } from 'express';
import { getEventDetailsBySlugFromDB } from './eventDetailsPage.service.js';

export const getEventDetailsBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing slug parameter',
      });
    }

    const result = await getEventDetailsBySlugFromDB(slug);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Event details not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event details fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch event details',
      error: error instanceof Error ? error.message : error,
    });
  }
};