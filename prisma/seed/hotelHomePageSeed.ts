import { PrismaClient } from '@prisma/client';
import { hotelHomePageData } from '../Data/hotelHomePageData';

export const hotelHomePageSeed = async(prisma: PrismaClient): Promise<void> => {
   
console.log('Seeding HotelHomePage deals...');

await prisma.hotelDealHomePage.deleteMany({});

for (let hotel of hotelHomePageData as any[]) {
        await prisma.hotelDealHomePage.upsert({
            where: { slug: hotel.slug },
            update: hotel, 
            create: hotel, 
        })   
}
console.log('HotelHomePage deals seeded successfully!');
}