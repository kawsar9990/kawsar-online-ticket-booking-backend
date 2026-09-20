
export interface HotelDetailsData {
  id?: string;
  hotelId?: string;
  startingPrice: number | null;
  distanceText: string | null;
  address: string | null;
  maplink: string | null;
  mapEmbedUrl: string | null;
  mapRedirectUrl: string | null;
  description: string;
  HighLFac: string[];
  checkInTime: string;
  checkOutTime: string;
  additionalFacts: string[];
  paymentMethods: string[];
  galleryImages?: (HotelGalleryImage | string)[];
  categorizedFacilities?: CategorizedFacility[];
  rooms?: Room[];
}


export interface HotelGalleryImage  {
  id?: string;
  url: string;
  hotelDetailsId?: string;
}


export interface CategorizedFacility {
  id?: string;
  category: string;
  items?: string[];
  hotelDetailsId?: string;
}


export interface Room {
  id?: string;
  name: string;
  availableCountText?: string | null;
  availableCount?: number | null;
  bedType: string;
  maxAdults: number;
  maxChildren: number;
  viewType?: string | null;
  area?: string | null;
  quickAmenities: string[];
  hotelDetailId?: string;
  hotelDetailsId?: string; 
  images?: (RoomImage | string)[];
  options?: RoomOption[];
}


export interface RoomImage {
  id?: string;
  url: string;
  roomId?: string;
}


export interface RoomOption {
  id?: string;
  title?: string;
  pricePerNight: number;
  totalPrice: number;
  benefits: string[];
  nonBenefits: string[];
  isAvailable?: boolean;
  roomId?: string;
}


export type HotelDetailsMap = Record<string, HotelDetailsData>;