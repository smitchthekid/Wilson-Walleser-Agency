export interface Address {
  street?: string | null;
  city: string;
  state: string;
  zip?: string | null;
  country: string;
}

export interface Distance {
  miles: number;
  drive_minutes_range: [number, number];
  method: string;
}

export interface Listing {
  id: string;
  name: string;
  type: string;
  url: string;
  address: Address;
  overview: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  max_guests: number;
  amenities: string[];
  images: string[];
  price_per_night: number;
  distance_from_venue: Distance;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  age: number;
}

export interface BookingFormData {
  // Primary Contact
  fullName: string;
  email: string;
  phone: string;
  addressStreet: string;
  addressApt: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  
  // Reservation
  adults: number;
  children: number;
  
  // Dynamic
  additionalGuests: GuestInfo[];
}