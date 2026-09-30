import { redis } from "../../config/redis.js";
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


export const getEventDetailsBySlugFromDB = async (slug: string) => {

const CACHE_KEY = `event_details_${slug}`;
const CACHE_TTL = 28200;

try{
const cachedData = await redis.get(CACHE_KEY);
if (cachedData) {
  return typeof cachedData === 'string' ? JSON.parse(cachedData) : cachedData;
}
}catch(error){
  console.error('Redis Get Error:', error);  
}

const eventData = await prisma.event.findUnique({
   where: { slug },
    include: {
      detail: {
        include: {
          tickets: { orderBy: { sortOrder: 'asc' } },
        },
      },
    },
});

if (!eventData || !eventData.detail) {
    return null;
}

const formattedDetails = eventData;

try{
await redis.set(
CACHE_KEY, 
JSON.stringify(formattedDetails), 
{
ex: CACHE_TTL,
});
}catch (error) {
console.error('Redis Set Error:', error);
}

return formattedDetails;
}