import cron from "node-cron";
import { redis } from "../../config/redis.js";
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


const CACHE_KEY = "event_homepage_data";

export const startEventExpiryCron = () => {
  cron.schedule(
    "* * * * *",
    async () => {
      try {
        const now = new Date();

   
        const bdNow = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(now);

        const bdToday = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Asia/Dhaka",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(now);

   
        const events = await prisma.event.findMany({
          where: {
            status: {
              in: ["UPCOMING", "LIVE_NOW"],
            },
          },
          select: {
            id: true,
            eventDate: true,
            endTime: true,
          },
        });

        const expiredIds = events
          .filter((event) => {
            const eventDate = new Intl.DateTimeFormat("en-CA", {
              timeZone: "Asia/Dhaka",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(event.eventDate);


            if (eventDate < bdToday) {
              return true;
            }

   
            if (eventDate > bdToday) {
              return false;
            }


            if (event.endTime) {
              return bdNow >= event.endTime;
            }
            return false;
          })
          .map((event) => event.id);

        if (expiredIds.length === 0) {
          return;
        }

  
        await prisma.event.updateMany({
          where: {
            id: {
              in: expiredIds,
            },
          },
          data: {
            status: "EXPIRED",
            isLive: false,
          },
        });

        await redis.del(CACHE_KEY);

      } catch (error) {
        console.error("Event Expiry Cron Error:", error);
      }
    },
    {
      timezone: "Asia/Dhaka",
    },
  );
};