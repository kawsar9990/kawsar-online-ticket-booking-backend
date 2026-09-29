import { Event } from '../../src/types/eventPage.interface'

type EventSeedData = Omit<Event, 'id' | 'createdAt' | 'updatedAt'>


export const eventsData: EventSeedData[] = [
  {
    title: "Traliventa Sports Fest '26 by KUFA x Traliventa",
    slug: "traliventa-sports-fest-26-by-kufa-x-traliventa",
    category: "Sports",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790688629/gdc8ep0obkbtrtjbyyzh_nyiqf5.webp",

    startDate: new Date("2026-10-23T00:00:00.000Z"),
    endDate: new Date("2026-10-24T00:00:00.000Z"),
    startTime: "09:00",
    endTime: "21:00",
    venue: "Chef's Table Courtside",
    location: "United City, 100 Feet Road, Madani Ave, Dhaka",
    startingPrice: 140,
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
    title: "পঞ্চবিংশ জাতীয় বাক্‌শিল্পোৎসব: অনুরণন",
    slug: "jatio-bakshilpotshob-onuronon",
    category: "Competitions",
    bannerImage:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690067/20260826_221258_-_Mriganka_Banik_xfscbm.jpg",

    startDate: new Date("2026-11-01T00:00:00.000Z"),
    endDate: new Date("2026-11-03T00:00:00.000Z"),
    startTime: "09:00",
    endTime: "21:00",

    venue: "নটর ডেম কলেজ",
    location: "Dhaka, Bangladesh",

    startingPrice: 60,
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

    startDate: new Date("2026-09-01T00:00:00.000Z"),
    endDate: new Date("2026-10-02T00:00:00.000Z"),
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