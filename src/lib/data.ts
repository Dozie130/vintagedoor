
export type Door = {
  id: string;
  name: string;
  price: number;
  category: "wooden" | "glass" | "panel" | "flush";
  material: string;
  size: string;
  color: string;
  description: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  discount?: number;
  tags: string[];
  rating: number;
  reviews: number;
};

export const doors: Door[] = [
  {
    id: "door-001",
    name: "Classic Mahogany Panel Door",
    price: 65000,
    category: "wooden",
    material: "Mahogany",
    size: "80cm x 210cm",
    color: "Dark Brown",
    description: "Premium mahogany panel door with natural grain finish, perfect for main rooms in Lagos homes. Features solid core construction for durability and sound insulation.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: true,
    discount: 10,
    tags: ["premium", "wooden", "panel"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: "door-002",
    name: "Modern Frosted Glass Door",
    price: 84000,
    category: "glass",
    material: "Tempered Glass & Aluminum",
    size: "75cm x 210cm",
    color: "Silver/Frosted",
    description: "Contemporary frosted glass door with aluminum frame, ideal for bathrooms and modern Abuja apartments. Provides privacy while allowing light through.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: true,
    tags: ["modern", "glass", "bathroom"],
    rating: 4.7,
    reviews: 85
  },
  {
    id: "door-003",
    name: "Budget Flush Door",
    price: 24000,
    category: "flush",
    material: "Engineered Wood",
    size: "70cm x 200cm",
    color: "Light Oak",
    description: "Affordable flush door with laminate finish, suitable for bedrooms and rentals. Low-maintenance and durable with hollow core.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: false,
    tags: ["budget", "flush", "bedroom"],
    rating: 4.2,
    reviews: 213
  },
  {
    id: "door-004",
    name: "Premium Teak 6-Panel Door",
    price: 115000,
    category: "panel",
    material: "Solid Teak",
    size: "90cm x 215cm",
    color: "Natural Teak",
    description: "Luxury 6-panel solid teak door, perfect for main entrances in high-end Lagos and Abuja homes. Weather-resistant with natural oils.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: true,
    tags: ["luxury", "teak", "panel"],
    rating: 4.9,
    reviews: 67
  },
  {
    id: "door-005",
    name: "Sliding Barn Door",
    price: 78000,
    category: "wooden",
    material: "Reclaimed Pine",
    size: "100cm x 210cm",
    color: "Weathered Grey",
    description: "Trendy sliding barn door made from reclaimed pine, perfect for modern Nigerian apartments wanting a rustic touch. Space-saving design.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: false,
    featured: true,
    tags: ["sliding", "rustic", "space-saving"],
    rating: 4.6,
    reviews: 42
  },
  {
    id: "door-006",
    name: "Basic Interior Door",
    price: 20000,
    category: "flush",
    material: "MDF",
    size: "70cm x 200cm",
    color: "White",
    description: "Affordable white MDF door for basic interior use. Perfect for rental properties and budget renovations in Nigeria.",
    images: [
      "/placeholder.svg"
    ],
    inStock: true,
    featured: false,
    tags: ["budget", "basic", "white"],
    rating: 4.0,
    reviews: 182
  },
  {
    id: "door-007",
    name: "Half Glass Panel Door",
    price: 52000,
    category: "glass",
    material: "Pine and Clear Glass",
    size: "80cm x 210cm",
    color: "Natural Pine",
    description: "Half glass panel door combining wood and clear glass, ideal for living rooms to connect spaces while maintaining some privacy.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: false,
    tags: ["half-glass", "living room", "pine"],
    rating: 4.5,
    reviews: 73
  },
  {
    id: "door-008",
    name: "Pocket Sliding Door",
    price: 95000,
    category: "wooden",
    material: "Engineered Maple",
    size: "85cm x 210cm",
    color: "Maple Finish",
    description: "Space-saving pocket door that slides into the wall cavity. Perfect for compact Lagos and Abuja apartments where space is premium.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    inStock: true,
    featured: false,
    tags: ["pocket", "sliding", "space-saving"],
    rating: 4.7,
    reviews: 28
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Aisha Mohammed",
    location: "Lagos",
    comment: "The doors arrived on time and the quality is excellent. My contractor was impressed with the solid wood construction. Will order again!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Emeka Okafor",
    location: "Abuja",
    comment: "Bought 6 doors for my new apartment and they transformed the space. Installation was easy and the price was better than local stores.",
    rating: 4,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Funmi Adeyemi",
    location: "Port Harcourt",
    comment: "Very happy with my glass door purchase. The quality is top-notch and it arrived well-packaged with no damage. Fast delivery too!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Ibrahim Bello",
    location: "Kano",
    comment: "As a contractor, I've now ordered from Vintage Door three times. My clients love the quality and I appreciate the bulk discount.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

export const categories = [
  {
    id: "wooden",
    name: "Wooden Doors",
    description: "Timeless wooden doors in various styles",
    image: "/placeholder.svg"
  },
  {
    id: "glass",
    name: "Glass Doors",
    description: "Modern glass doors for contemporary homes",
    image: "/placeholder.svg"
  },
  {
    id: "panel",
    name: "Panel Doors",
    description: "Classic panel designs for elegant interiors",
    image: "/placeholder.svg"
  },
  {
    id: "flush",
    name: "Flush Doors",
    description: "Simple, affordable doors for every room",
    image: "/placeholder.svg"
  }
];
