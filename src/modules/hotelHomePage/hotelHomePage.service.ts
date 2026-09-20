import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { redis } from '../../config/redis.js';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const CACHE_KEY = "hotel_homepage_data";
const CACHE_TTL = 28800;

export const getFeaturedHotelDealsFromDB = async () => {

try{
const cachedData = await redis.get(CACHE_KEY);
if (cachedData) {
  return JSON.parse(String(cachedData));
}
}catch(error){
  console.error('Redis Get Error:', error);  
}

const deals = await prisma.hotelDealHomePage.findMany({
    where: {
        isFeatured: true
    },
    orderBy: {
        createdAt: 'desc',
    }
});


try{
await redis.set(
CACHE_KEY, 
JSON.stringify(deals), 
{
ex: CACHE_TTL,
});
}catch (error) {
console.error('Redis Set Error:', error);
}

return deals;
}