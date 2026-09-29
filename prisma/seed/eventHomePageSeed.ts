import { PrismaClient } from '@prisma/client';
import { eventsData } from '../Data/eventHomePageData';

export const EventHomePageSeed = async(prisma: PrismaClient): Promise<void> => {
   
console.log('🌱 Seeding EventHomePage deals...');

await prisma.event.deleteMany({});

for (let event of eventsData) {
        await prisma.event.upsert({
            where: { slug: event.slug },
            update: event, 
            create: event, 
        })   
}
console.log('✅ Event HomePage Data seeded successfully!');
}