import { PrismaClient } from '@prisma/client';
import { eventDetailsData } from '../Data/eventDetailsData';


export const seedEventDetails = async (prisma: PrismaClient): Promise<void> => {
  
for (const [slug, data] of Object.entries(eventDetailsData)){
try {
      const event = await prisma.event.findUnique({
        where: { slug },
        select: { id: true },
      })

      if (!event) {
        console.warn(`Skip: "${slug}" slug er kono Event nai`)
        continue
      }

      const { tickets, ...detailFields } = data

      await prisma.$transaction(async (tx) => {
        await tx.eventDetail.deleteMany({ where: { eventId: event.id } })

        await tx.eventDetail.create({
          data: {
            ...detailFields,
            eventId: event.id,
            tickets: { create: tickets },
          },
        })
      })

      console.log(`Seeded details: ${slug} (${tickets.length} tickets)`)
    } catch (error) {
      console.error(`Failed: ${slug}`, error)
    }
  }
};