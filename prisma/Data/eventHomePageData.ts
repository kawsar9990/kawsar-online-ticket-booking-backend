import { Event } from '../../src/types/eventPage.interface'

type EventSeedData = Omit<Event, 'id' | 'createdAt' | 'updatedAt'>


export const eventsData: EventSeedData[] = [
  {
    title: "Winds of Metropolis",
    slug: "winds-of-metropolis",
    category: "Consert",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790739408/WOM_Tickify_new_landing_page_copy_DflsgQV_qcqdcr.webp",

    startDate: new Date("2026-11-03T00:00:00.000Z"),
    endDate: new Date('2026-10-03T00:00:00.000Z'),
    startTime: "15:00",
    endTime: "23:00",
    venue: "KIB, Dhaka",
    location: "Dhaka",
    startingPrice: 799,
    currency: "BDT",
    isLive: true,
    status: "UPCOMING",
  },

  {
    title: "1st ISCSC National Sports Festival",
    slug: "1st-iscsc-national-sports-festival",
    category: "Festival",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790689497/Event_Banner_1_1600x600_-_Sazidur_Rahman_c47pnj.png",

    startDate: new Date("2026-10-20T00:00:00.000Z"),
    endDate: new Date("2026-10-24T00:00:00.000Z"),
    startTime: "08:00",
    endTime: "19:30",

    venue: "Ideal School and College",
    location: "Dhaka",

    startingPrice: 100,
    currency: "BDT",

    isLive: true,
    status: "UPCOMING",
  },


  {
    title: "Music. Moments. Renaissance Featuring Shironamhin",
    slug: "music-moments-renaissance",
    category: "Consert",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790737582/WhatsApp_Image_2026-09-19_at_19.21.54_ginbcc.jpg",

    startDate: new Date("2026-11-01T00:00:00.000Z"),
    endDate: new Date("2026-11-01T00:00:00.000Z"),
    startTime: "08:00",
    endTime: "18:00",

    venue: "Renaissance Dhaka Gulshan Hotel",
    location: "Dhaka, Bangladesh",

    startingPrice: 2499,
    currency: "BDT",

    isLive: true,
    status: "UPCOMING",
  },


  {
    title: "Econo Carnival Bangladesh | Season-01",
    slug: "econo-carnival-bangladesh-season-01",
    category: "Competitions",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690268/1200_X_630_-_Shanto_Dev_qvqik9.webp",

    startDate: new Date("2026-10-15T00:00:00.000Z"),
    endDate: new Date("2026-10-17T00:00:00.000Z"),
    startTime: "08:00",
    endTime: "18:00",

    venue: "Notre Dame College",
    location: "Dhaka",

    startingPrice: 100,
    currency: "BDT",

    isLive: true,
    status: "UPCOMING",
  },



  {
    title: "PROJECT NOIR",
    slug: "project-noir",
    category: "Consert",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690733/1200X630_-_The_Takeover_yjy9dx.webp",

    startDate: new Date("2026-07-05T00:00:00.000Z"),
    endDate: new Date("2026-07-07T00:00:00.000Z"),
    startTime: "09:00",
    endTime: "15:00",

    venue: "An Noor Convention Hall, behind of EAST WEST UNIVERSITY, Badda",
    location: "Dhaka, Bangladesh",

    startingPrice: 1650,
    currency: "BDT",

    isLive: false,
    status: "EXPIRED",
  },


  {
    title: "14th ISTARC Science & Technology Festival",
    slug: "14th-istarc-science-technology-festival",
    category: "Competitions",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690514/image_2026-09-10_194506177_-_Saiyeda_Fatima_Tahura_usodxm.png",

    startDate: new Date("2025-09-01T00:00:00.000Z"),
    endDate: new Date("2025-09-02T00:00:00.000Z"),
    startTime: "09:00",
    endTime: "18:00",

    venue: "Ideal School & College, Peerjongi Majar Road, Motijheel",
    location: "Dhaka-1000",

    startingPrice: 0,
    currency: "BDT",

    isLive: false,
    status: "EXPIRED",
  },
];