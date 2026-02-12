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
  walk_minutes_range?: [number, number] | null;
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

export interface Social {
  facebook?: string;
  instagram?: string;
}

export interface Phone {
  display: string;
  e164: string;
}

export interface Hotel {
  id: string;
  name: string;
  type: 'lodging';
  address: Address;
  phone: Phone;
  email?: string;
  website?: string | null;
  maps_url: string;
  badge?: {
    pet_policy: string;
  };
  pet_policy_details?: string[];
  distance_from_venue: Distance;
  notes?: string[];
  social?: Social;
}

export interface Eatery {
  id: string;
  name: string;
  type: 'eatery';
  category: string;
  address: Address;
  phone?: Phone;
  email?: string;
  website?: string | null;
  maps_url: string;
  social?: Social;
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