
export interface HotelDealHomePageInput {
  name: string;
  slug: string;
  thumbnailUrl: string;
  starRating: number;
  totalReviews?: number;
  isFeatured?: boolean;
}

export const hotelHomePageData: HotelDealHomePageInput[] = [
  {
    name: 'Bhawal Resort & Spa',
    slug: 'bhawal-resort-and-spa',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/bhawal-resort-spa-20210907174024_hkig96.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Grand Sylhet Hotel & Resort',
    slug: 'grand-sylhet-hotel-and-resort',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476380/267736179_149939317369872_2872125975221274736_n_hjvlaw.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Sayeman Beach Resort',
    slug: 'sayeman-beach-resort',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476379/sayeman_-1_to7ebb.png',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Grand Sultan Tea Resort & Golf',
    slug: 'grand-sultan-tea-resort-and-golf',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/343430076_915485859505434_797408506640452438_n_gnm9jr.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Best Western Heritage',
    slug: 'best-western-heritage',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/best-western-plus-heritage_lv2hfi.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Seagull Hotel,Coxs Bazar',
    slug: 'seagull-hotels-ltd',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476377/rsdtkfyguih_wbs8qd.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Sea Pearl Beach Resort and Spa Ltd.',
    slug: 'sea-pearl-beach-resort-and-spa-ltd',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/agoda-2564409-60592569-839740_c7gfou.jpg',
    starRating: 5,
    isFeatured: true,
  },
  {
    name: 'Dream Square Resort',
    slug: 'dream-square-resort',
    thumbnailUrl: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/369785529_305623735457322_3320508981205518508_n_fxeoyo.jpg',
    starRating: 5,
    isFeatured: true,
  }
];