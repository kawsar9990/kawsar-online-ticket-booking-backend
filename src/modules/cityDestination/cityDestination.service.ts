import citydestinations from "../../model/citydestinations.js";
import { redis } from "../../config/redis.js";

const CACHE_KEY = "all_city_destinations";
const CACHE_TTL = 28800;


const getAllCityDestinationsFromDB = async () => {
    const cachedData = await redis.get(CACHE_KEY);
    if(cachedData){
       return cachedData;
    };
    const result = await citydestinations.find();
    if(result && result.length > 0){
        await redis.set(CACHE_KEY, result, { ex: CACHE_TTL })
    }
    return result;
};

export const CityDestinationServices = {
    getAllCityDestinationsFromDB,
};