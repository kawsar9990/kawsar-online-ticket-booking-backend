import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { redis } from "../../config/redis.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const CACHE_KEY = "hotel_details_data";
const CACHE_TTL = 25200;


export const getHotelDetailsBySlugFromDB = async (slug: string) => {

try{
const cachedData = await redis.get(CACHE_KEY);
if (cachedData) {
  return JSON.parse(String(cachedData));
}
}catch(error){
  console.error('Redis Get Error:', error);  
}

const hotelData = await prisma.hotelDealHomePage.findUnique({
    where: {
        slug: slug,
    },
    include: {
        detail: {
            include: {
                galleryImages: true,
                categorizedFacilities: true,
                rooms: {
                    include: {
                      images: true,
                      options: true,
                    },
                }
            }
        }
    }
});
if (!hotelData || !hotelData.detail) {
    return null;
}
const detail = hotelData.detail;

const formattedDetails = {
     [hotelData.slug]: {
     startingPrice: detail.startingPrice,
      distanceText: detail.distanceText,
      address: detail.address,
      maplink: detail.maplink,
      mapEmbedUrl: detail.mapEmbedUrl,
      mapRedirectUrl: detail.mapRedirectUrl,
      description: detail.description,
      HighLFac: detail.HighLFac,
      checkInTime: detail.checkInTime,
      checkOutTime: detail.checkOutTime,
      additionalFacts: detail.additionalFacts,
      paymentMethods: detail.paymentMethods,
      categorizedFacilities: detail.categorizedFacilities.map((fac: any) => ({
        category: fac.category,
        items: fac.items,
      })),
      galleryImages: detail.galleryImages.map((img: any) => img.url),
      rooms: detail.rooms.map((room: any) => ({
        name: room.name,
        availableCountText: room.availableCountText,
        availableCount: room.availableCount,
        bedType: room.bedType,
        maxAdults: room.maxAdults,
        maxChildren: room.maxChildren,
        viewType: room.viewType,
        area: room.area,
        quickAmenities: room.quickAmenities,
        images: room.images.map((img: any) => img.url),
        options: room.options.map((opt: any) => ({
          title: opt.title,
          pricePerNight: opt.pricePerNight,
          totalPrice: opt.totalPrice,
          benefits: opt.benefits,
          nonBenefits: opt.nonBenefits,
          isAvailable: opt.isAvailable,
        })),
      })),
    },
};

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