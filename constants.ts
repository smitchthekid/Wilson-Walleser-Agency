import { Listing, Hotel, Eatery } from './types';

export const AIRBNB_LISTINGS: Listing[] = [
  {
    id: "airbnb_1188537173224745771",
    name: "Apartment on Pearl St",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/1188537173224745771",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "For anyone that loves historic buildings, coffee shops, or bookstores this place is for you!!! This recently restored apartment is absolutely stunning. Located above La Crosse’s first coffee shop, Jules Coffee House and Pearl Street Bookstore on the iconic two blocks of Pearl Street. Walking distance to everything downtown! 2 blocks from The La Crosse Center, Mississippi River, and Riverside Park.",
    bedrooms: 3,
    beds: 4,
    bathrooms: 1,
    max_guests: 6,
    amenities: ["Kitchen", "Wifi", "Pets allowed", "Washer", "Free dryer", "Central air conditioning", "Hair dryer", "Refrigerator"],
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1188537173224745771/original/80d47bdd-878d-4cd9-87fe-a4c5f12cccb3.jpeg?aki_policy=xx_large"
    ],
    price_per_night: 225,
    distance_from_venue: { miles: 0.5, drive_minutes_range: [2, 5], method: "approx" }
  },
  {
    id: "airbnb_53566277",
    name: "Cobblestone Cottage",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/53566277",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Enjoy a cozy stay at this fully renovated centrally-located home. Look out the large dining room windows to see a charming historic cobblestone brick street! The house is only two blocks from UWL in a safe and quiet neighborhood. Cook in the fully renovated kitchen with cabinetry designed by local Amish, dine or work in the light filled dining area, or relax under the twinkling lights on the 3 seasons porch.",
    bedrooms: 4,
    beds: 4,
    bathrooms: 2.5,
    max_guests: 8,
    amenities: ["Kitchen", "Wifi", "Dedicated workspace", "Free parking", "Pets allowed", "HDTV", "Washer", "Dryer", "AC", "Bathtub"],
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-53566277/original/2c7b1e97-5509-4a7a-b60b-e71e251cd54f.jpeg",
      "https://a0.muscache.com/im/pictures/e3540d29-1409-4d9c-a533-265522fa5b92.jpg",
      "https://a0.muscache.com/im/pictures/c0bfa63f-4315-407d-be0f-972176af4438.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53566277/original/0a2b8302-385b-47c0-9a82-88b961593467.jpeg"
    ],
    price_per_night: 350,
    distance_from_venue: { miles: 1.2, drive_minutes_range: [4, 7], method: "approx" }
  },
  {
    id: "airbnb_37877767",
    name: "Bluff View Victorian",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/37877767",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Modern Victorian home, dates back to La Crosses Lumber mill days. Built by the Molzahn family in 1895, key features included open concept with tons of natural light. Located one of the best neighborhoods in La Crosse. This is the upper unit of the house, stairs are required to get into the unit.",
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    max_guests: 6,
    amenities: ["Wifi", "Kitchen", "Free Bikes", "Keypad Entry", "Spacious"],
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-37877767/original/b7e5bc3f-3e3e-4990-b30d-7ecc124a02ec.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-37877767/original/3c3a232e-c273-4945-be3f-6e114e48b0a4.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-37877767/original/4dbbf634-b923-4c2e-9436-a03c55b8ff65.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-37877767/original/a7c3c240-6b95-4a98-bdba-b28ee43928de.jpeg?aki_policy=xx_large"
    ],
    price_per_night: 275,
    distance_from_venue: { miles: 1.5, drive_minutes_range: [5, 8], method: "approx" }
  },

  {
    id: "airbnb_38241797",
    name: "Bluff Wildlife & Quiet",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/38241797",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Great neighborhood! Enjoy the bluffs, wildlife, and a quiet atmosphere perfect for a peaceful getaway with a large group.",
    bedrooms: 5,
    beds: 6,
    bathrooms: 3,
    max_guests: 10,
    amenities: ["Wildlife", "Quiet Area", "Wifi", "Kitchen", "Large Group Friendly"],
    images: [
      "https://a0.muscache.com/im/pictures/102d46de-1931-4950-9212-960e58f0333f.jpg?im_w=960",
      "https://a0.muscache.com/im/pictures/a1defacd-9042-462b-8785-0dbad7d77711.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/48398a89-08e0-4ff1-a95e-a3288960b2fd.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/832f9fda-b40e-484e-8233-68ad1bdbdff9.jpg?aki_policy=xx_large"
    ],
    price_per_night: 380,
    distance_from_venue: { miles: 3.2, drive_minutes_range: [9, 14], method: "approx" }
  },
  {
    id: "airbnb_42610014",
    name: "Charming Bungalow",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/42610014",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Charming Bungalow centrally located with a cute porch! Perfect for enjoying the local atmosphere.",
    bedrooms: 3,
    beds: 3,
    bathrooms: 1.5,
    max_guests: 6,
    amenities: ["Porch", "Central Location", "Wifi", "Kitchen"],
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-42610014/original/d3a56ca4-35b0-4775-a513-5554a5d11162.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-42610014/original/35cb3cc1-72fa-4199-82dc-8e1440d872f2.jpeg?aki_policy=xx_large"
    ],
    price_per_night: 215,
    distance_from_venue: { miles: 1.0, drive_minutes_range: [3, 5], method: "approx" }
  },
  {
    id: "airbnb_36882483",
    name: "Craftsman Bungalow",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/36882483",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Beautiful Craftsman Bungalow - Centrally located! Experience classic architecture with modern conveniences.",
    bedrooms: 4,
    beds: 4,
    bathrooms: 2,
    max_guests: 8,
    amenities: ["Craftsman Style", "Central Location", "Wifi", "Kitchen"],
    images: [
      "https://a0.muscache.com/im/pictures/c1ce4ef7-fc27-4f1b-9c6c-32b1c3593736.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/d3bdd41d-8798-45e2-acdc-6cd7a78aba7d.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/0fc7f940-7bd4-4288-8de9-2f184e3d0dbe.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/a0e133c8-2a3f-4443-af85-88cc126cd977.jpg?aki_policy=xx_large"
    ],
    price_per_night: 265,
    distance_from_venue: { miles: 1.3, drive_minutes_range: [4, 7], method: "approx" }
  },
  {
    id: "airbnb_47336433",
    name: "Mod Manor on Main",
    type: "airbnb",
    url: "https://www.airbnb.com/rooms/47336433",
    address: { city: "La Crosse", state: "WI", country: "US" },
    overview: "Mod Manor on Main - Celebrations, Reunions, Events. The ideal location for large groups and special occasions with modern amenities and plenty of space.",
    bedrooms: 6,
    beds: 8,
    bathrooms: 2.5,
    max_guests: 12,
    amenities: ["Events Allowed", "Large Groups", "Wifi", "Kitchen", "Modern Interior"],
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-47336433/original/c9cc630d-8460-4616-87da-356376a24df7.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47336433/original/766fd9e9-4063-454b-98f4-85a1565b6c23.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47336433/original/a6d920dd-4f47-41e9-8d7a-b917bf77b465.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47336433/original/4a8dfb0d-6348-40b9-96a5-b7c6a1a7c3e1.jpeg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/miso/Hosting-47336433/original/aaeae8b7-11c1-4a99-a248-e7ff020d10f6.jpeg?aki_policy=xx_large"
    ],
    price_per_night: 450,
    distance_from_venue: { miles: 0.8, drive_minutes_range: [3, 5], method: "approx" }
  }
];

export const HOTEL_LISTINGS: Hotel[] = [
  {
    id: "hotel_candlewood_suites_lacrosse_n",
    name: "Candlewood Suites La Crosse N by IHG",
    type: "lodging",
    address: {
      street: "56 Copeland Avenue",
      city: "La Crosse",
      state: "WI",
      zip: "54603",
      country: "US"
    },
    phone: {
      display: "(608) 785-1110",
      e164: "+16087851110"
    },
    email: "visbell@kinseth.com",
    website: "https://www.ihg.com/candlewood/hotels/us/en/la-crosse/lsecb/hoteldetail",
    social: {
      facebook: "https://www.facebook.com/CandlewoodSuitesLaX/"
    },
    maps_url: "https://www.google.com/maps/place/56+Copeland+Ave,+La+Crosse,+WI+54603",
    badge: {
      pet_policy: "PET_FRIENDLY"
    },
    distance_from_venue: {
      miles: 4.8,
      drive_minutes_range: [10, 12],
      method: "approx"
    },
    notes: [
      "More of a short-drive option; suitable for extended stays and guests prioritizing pet accommodation."
    ]
  },
  {
    id: "hotel_hampton_inn_suites_downtown",
    name: "Hampton Inn & Suites La Crosse Downtown",
    type: "lodging",
    address: {
      street: "511 3rd Street N",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 791-4004",
      e164: "+16087914004"
    },
    email: "lsedo_hampton_suites@hilton.com",
    website: "https://www.hilton.com/en/hotels/lsedohx-hampton-suites-la-crosse-downtown/",
    maps_url: "https://www.google.com/maps/place/511+3rd+St+N,+La+Crosse,+WI+54601",
    badge: {
      pet_policy: "PET_FRIENDLY"
    },
    pet_policy_details: [
      "Pets allowed (dogs and cats only, 2 total, up to 51 lbs per pet).",
      "Service animals welcome.",
      "Food and water bowls and off-leash area available."
    ],
    distance_from_venue: {
      miles: 0.6,
      drive_minutes_range: [4, 6],
      walk_minutes_range: [12, 15],
      method: "approx"
    },
    notes: [
      "Downtown / walkable; strong option for guests traveling with pets."
    ]
  },
  {
    id: "hotel_fairfield_inn_suites_downtown",
    name: "Fairfield Inn & Suites by Marriott La Crosse Downtown",
    type: "lodging",
    address: {
      street: "434 3rd Street S",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 433-1000",
      e164: "+16084331000"
    },
    website: "https://www.marriott.com/en-us/hotels/lsefi-fairfield-inn-and-suites-la-crosse-downtown/overview/",
    maps_url: "https://www.google.com/maps/place/434+3rd+St+S,+La+Crosse,+WI+54601",
    badge: {
      pet_policy: "NO_PETS"
    },
    distance_from_venue: {
      miles: 0.4,
      drive_minutes_range: [3, 5],
      walk_minutes_range: [8, 10],
      method: "approx"
    },
    notes: [
      "Downtown / walkable; predictable Marriott standards."
    ]
  },
  {
    id: "hotel_courtyard_riverfront",
    name: "Courtyard by Marriott La Crosse Downtown / Mississippi Riverfront",
    type: "lodging",
    address: {
      street: "500 Front Street S",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 782-1000",
      e164: "+16087821000"
    },
    website: null,
    maps_url: "https://www.google.com/maps/place/500+Front+St+S,+La+Crosse,+WI+54601",
    badge: {
      pet_policy: "NO_PETS"
    },
    distance_from_venue: {
      miles: 0.2,
      drive_minutes_range: [2, 3],
      walk_minutes_range: [4, 6],
      method: "approx"
    },
    notes: [
      "Closest recommended hotel to the venue; riverfront and highly walkable.",
      "Website: Marriott brand pages can change format; treat as unavailable if you need a stable literal URL."
    ]
  },
  {
    id: "hotel_radisson_lacrosse",
    name: "Radisson Hotel La Crosse",
    type: "lodging",
    address: {
      street: "200 Harborview Plaza",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 784-6680",
      e164: "+16087846680"
    },
    website: "https://www.choicehotels.com/wisconsin/la-crosse/radisson-hotels/wi480",
    maps_url: "https://www.google.com/maps/place/200+Harborview+Plaza,+La+Crosse,+WI+54601",
    badge: {
      pet_policy: "PET_FRIENDLY"
    },
    distance_from_venue: {
      miles: 0.3,
      drive_minutes_range: [2, 4],
      walk_minutes_range: [6, 8],
      method: "approx"
    },
    notes: [
      "Downtown / riverfront; walkable to the venue."
    ]
  },
  {
    id: "hotel_charmant",
    name: "The Charmant Hotel",
    type: "lodging",
    address: {
      street: "101 State Street",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 519-8800",
      e164: "+16085198800"
    },
    email: "info@thecharmanthotel.com",
    website: "https://www.thecharmanthotel.com",
    maps_url: "https://www.google.com/maps/place/101+State+St,+La+Crosse,+WI+54601",
    badge: {
      pet_policy: "NO_PETS"
    },
    distance_from_venue: {
      miles: 0.5,
      drive_minutes_range: [3, 5],
      walk_minutes_range: [10, 12],
      method: "approx"
    },
    notes: [
      "Boutique downtown option; still walkable."
    ]
  }
];

export const EATERIES_LISTINGS: Eatery[] = [
  {
    id: "eat_breakfast_club_pub",
    name: "The Breakfast Club & Pub",
    type: "eatery",
    category: "Breakfast & Brunch",
    address: {
      street: "214 Main Street",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 782-0050",
      e164: "+16087820050"
    },
    website: "https://www.breakfastclub-pub.com",
    maps_url: "https://www.google.com/maps/place/214+Main+St,+La+Crosse,+WI+54601"
  },
  {
    id: "eat_piggys",
    name: "Piggy’s Restaurant & Blues Lounge",
    type: "eatery",
    category: "American / BBQ",
    address: {
      street: "501 Front Street S",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "(608) 784-4877",
      e164: "+16087844877"
    },
    email: "info@piggysrestaurant.com",
    website: null,
    maps_url: "https://www.google.com/maps/place/501+Front+St+S,+La+Crosse,+WI+54601"
  },
  {
    id: "eat_buzzard_billys_lacrosse",
    name: "Buzzard Billy's La Crosse",
    type: "eatery",
    category: "Cajun / American",
    address: {
      street: "222 Pearl St",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "608-796-2277",
      e164: "+16087962277"
    },
    website: "https://lacrosse.buzzardbillys.com/",
    social: {
      facebook: "https://www.facebook.com/buzzard.billyslacrosse/"
    },
    maps_url: "https://www.google.com/maps/place/222+Pearl+St,+La+Crosse,+WI+54601"
  },
  {
    id: "eat_lovechild_restaurant",
    name: "Lovechild Restaurant",
    type: "eatery",
    category: "American (Modern)",
    address: {
      street: "300 3rd Street South",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "608-433-2234",
      e164: "+16084332234"
    },
    website: "http://lovechildrestaurant.com/menu.html",
    social: {
      facebook: "https://www.facebook.com/LovechildRestaurant"
    },
    maps_url: "https://www.google.com/maps/place/300+3rd+St+S,+La+Crosse,+WI+54601"
  },
  {
    id: "eat_freighthouse_restaurant",
    name: "The Freighthouse Restaurant",
    type: "eatery",
    category: "Steakhouse",
    address: {
      street: "107 Vine Street",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "608-784-6211",
      e164: "+16087846211"
    },
    website: "https://www.freighthouserestaurant.com/",
    maps_url: "https://www.google.com/maps/place/107+Vine+St,+La+Crosse,+WI+54601"
  },
  {
    id: "eat_le_chateau",
    name: "Le Chateau",
    type: "eatery",
    category: "French",
    address: {
      street: "410 Cass St",
      city: "La Crosse",
      state: "WI",
      zip: "54601",
      country: "US"
    },
    phone: {
      display: "608-782-6498",
      e164: "+16087826498"
    },
    website: "https://lechateaulacrosse.com/",
    maps_url: "https://www.google.com/maps/place/410+Cass+St,+La+Crosse,+WI+54601"
  }
];