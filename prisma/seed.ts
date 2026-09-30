import { PrismaClient } from '@prisma/client';
import { hotelHomePageSeed } from './seed/hotelHomePageSeed.js';
import { hotelDetailsSeed } from './seed/hotelDetailsPageSeed.js';
import { EventHomePageSeed } from './seed/eventHomePageSeed.js';
import { seedEventDetails } from './seed/eventDetailsPageSeed.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    await hotelHomePageSeed(prisma);
    await hotelDetailsSeed(prisma);
    await EventHomePageSeed(prisma);
    await seedEventDetails(prisma);
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})