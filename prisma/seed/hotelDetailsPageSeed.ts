import { PrismaClient } from '@prisma/client';
import { hotelDetailsData } from '../Data/hotelDetailsData';

export const hotelDetailsSeed = async (prisma: PrismaClient): Promise<void> => {

  
  await prisma.roomOption.deleteMany({});
  await prisma.roomImage.deleteMany({});
  await prisma.room.deleteMany({});
  await prisma.categorizedFacility.deleteMany({});
  await prisma.hotelGalleryImage.deleteMany({});
  await prisma.hotelDetailsData.deleteMany({});

  for (const [key, detail] of Object.entries(hotelDetailsData)) {
    const hotel = await prisma.hotelDealHomePage.findUnique({
      where: { slug: key },
    });

    if (!hotel) {
      console.log(`⚠️ Skipped: No hotel found for slug "${key}"`);
      continue;
    }

    const createdDetail = await prisma.hotelDetailsData.upsert({
      where: { hotelId: hotel.id },
      update: {
        startingPrice: detail.startingPrice,
        distanceText: detail.distanceText,
        address: detail.address,
        city: detail.city,
        maplink: detail.maplink,
        mapEmbedUrl: detail.mapEmbedUrl,
        mapRedirectUrl: detail.mapRedirectUrl,
        description: detail.description,
        HighLFac: detail.HighLFac || [],
        checkInTime: detail.checkInTime,
        checkOutTime: detail.checkOutTime,
        additionalFacts: detail.additionalFacts || [],
        paymentMethods: detail.paymentMethods || [],
        hotelId: hotel.id,
      },
      create: {
        startingPrice: detail.startingPrice,
        distanceText: detail.distanceText,
        address: detail.address,
        city: detail.city,
        maplink: detail.maplink,
        mapEmbedUrl: detail.mapEmbedUrl,
        mapRedirectUrl: detail.mapRedirectUrl,
        description: detail.description,
        HighLFac: detail.HighLFac || [],
        checkInTime: detail.checkInTime,
        checkOutTime: detail.checkOutTime,
        additionalFacts: detail.additionalFacts || [],
        paymentMethods: detail.paymentMethods || [],
        hotelId: hotel.id,
      },
    });

    if (detail.galleryImages?.length) {
      await prisma.hotelGalleryImage.deleteMany({ where: { hotelDetailId: createdDetail.id } });
      const galleryData = detail.galleryImages.map((img: any) => ({
        url: typeof img === 'string' ? img : img.url!,
        hotelDetailId: createdDetail.id,
      }));
      await prisma.hotelGalleryImage.createMany({ data: galleryData });
    }

    if (detail.categorizedFacilities?.length) {
      await prisma.categorizedFacility.deleteMany({ where: { hotelDetailId: createdDetail.id } });
      const facilityData = detail.categorizedFacilities.map((fac: any) => ({
        category: fac.category,
        items: fac.items || fac.item || [],
        hotelDetailId: createdDetail.id,
      }));
      await prisma.categorizedFacility.createMany({ data: facilityData });
    }

    if (detail.rooms?.length) {
      await prisma.room.deleteMany({ where: { hotelDetailId: createdDetail.id } });
      for (const room of detail.rooms as any[]) {
        const createdRoom = await prisma.room.create({
          data: {
            name: room.name,
            availableCountText: room.availableCountText,
            availableCount: room.availableCount,
            bedType: room.bedType,
            maxAdults: room.maxAdults,
            maxChildren: room.maxChildren,
            viewType: room.viewType,
            area: room.area,
            quickAmenities: room.quickAmenities || [],
            hotelDetailId: createdDetail.id,
          },
        });

        if (room.images?.length) {
          const roomImgData = room.images.map((img: any) => ({
            url: typeof img === 'string' ? img : img.url!,
            roomId: createdRoom.id,
          }));
          await prisma.roomImage.createMany({ data: roomImgData });
        }

        if (room.options?.length) {
          const roomOptData = room.options.map((opt: any) => ({
            title: opt.title || 'Option 1',
            pricePerNight: opt.pricePerNight,
            totalPrice: opt.totalPrice,
            benefits: opt.benefits || [],
            nonBenefits: opt.nonBenefits || [],
            isAvailable: opt.isAvailable ?? true,
            roomId: createdRoom.id,
          }));
          await prisma.roomOption.createMany({ data: roomOptData });
        }
      }
    }
  }

  console.log('Hotel Details seeded successfully!');
};