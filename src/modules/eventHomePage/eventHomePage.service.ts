import { redis } from '../../config/redis.js';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const CACHE_KEY = "event_homepage_data";
const CACHE_TTL = 26800;



export const getFeaturedEventFromDB = async () => {

try{
const cachedData = await redis.get(CACHE_KEY);
if (cachedData) {
  return typeof cachedData === 'string' ? JSON.parse(cachedData) : cachedData;
}
}catch(error){
  console.error('Redis Get Error:', error);  
}

const deals = await prisma.event.findMany({
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