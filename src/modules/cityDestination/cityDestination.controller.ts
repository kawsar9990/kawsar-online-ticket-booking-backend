import type { Request, Response } from "express";
import { CityDestinationServices } from "./cityDestination.service.js";


export const getCityDestinations = async (req: Request, res: Response) => {
try{
const result = await CityDestinationServices.getAllCityDestinationsFromDB();

res.status(200).json({
  success: true,
  message: 'City destinations fetched successfully',
  data: result,  
})
}
catch(error: any) {
    res.status(500).json({
       success: false,
       message: 'Something went wrong!',
       error: error.message,
    })
}
}