// Wendo Coffee & Bistro - Business Information Constants

export const BUSINESS_INFO = {
  name: "Wendo Coffee & Bistro",
  tagline: "Where Every Cup Tells a Story",
  description: "A cozy haven for coffee lovers and food enthusiasts",
} as const;

export const CONTACT_INFO = {
  phones: {
    primary: "0707242987",
    secondary: "0722392343",
  },
  whatsapp: {
    number: "254707242987",
    internationalFormat: "+254 707 242987",
    link: "https://wa.me/254707242987",
  },
  email: "info@wendocoffee.com",
  address: {
    street: "Nyeri Town",
    city: "Nyeri",
    country: "Kenya",
    full: "Nyeri Town, Kenya",
  },
} as const;

export const OPERATING_HOURS = {
  weekdays: {
    days: "Monday - Friday",
    hours: "7:00 AM - 8:00 PM",
  },
  saturday: {
    days: "Saturday",
    hours: "8:00 AM - 9:00 PM",
  },
  sunday: {
    days: "Sunday",
    hours: "8:00 AM - 7:00 PM",
  },
} as const;

export const SOCIAL_MEDIA = {
  facebook: {
    name: "Facebook",
    url: "https://facebook.com/wendocoffee",
    handle: "@wendocoffee",
  },
  instagram: {
    name: "Instagram",
    url: "https://instagram.com/wendocoffee",
    handle: "@wendocoffee",
  },
  twitter: {
    name: "Twitter",
    url: "https://twitter.com/wendocoffee",
    handle: "@wendocoffee",
  },
  tiktok: {
    name: "TikTok",
    url: "https://tiktok.com/@wendocoffee",
    handle: "@wendocoffee",
  },
} as const;

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
] as const;

// Menu Categories
export const MENU_CATEGORIES = [
  { id: "coffee", name: "Coffee & Beverages" },
  { id: "non-coffee", name: "Non-Coffee" },
  { id: "iced-drinks", name: "Iced Drinks" },
  { id: "milkshakes", name: "Milkshakes" },
  { id: "fresh-juices", name: "Fresh Juices" },
  { id: "breakfast-combos", name: "Breakfast Combos" },
  { id: "breakfast", name: "Breakfast Items" },
  { id: "lunch", name: "Lunch & Mains" },
  { id: "pancakes", name: "Pancakes" },
  { id: "wraps", name: "Wraps & Burgers" },
  { id: "pizza", name: "Pizza" },
  { id: "oriental", name: "Oriental Dishes" },
  { id: "pastries", name: "Pastries" },
  { id: "salads", name: "Salads" },
] as const;

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  prices: {
    label?: string;
    amount: number;
  }[];
  image: string;
  category: string;
  dietary?: "vegetarian" | "vegan";
  note?: string;
};

// Complete Wendo Coffee & Bistro Menu
export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & BEVERAGES
  {
    id: "espresso",
    name: "Espresso",
    description: "Rich and bold Italian-style espresso from premium Arabica beans",
    prices: [
      { label: "Single", amount: 150 },
      { label: "Double", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",
    category: "coffee",
  },
  {
    id: "americano",
    name: "Americano",
    description: "Classic espresso diluted with hot water for a smooth experience",
    prices: [
      { label: "Single", amount: 150 },
      { label: "Double", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    category: "coffee",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Smooth espresso with steamed milk and delicate microfoam",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    category: "coffee",
  },
  {
    id: "oreo-latte",
    name: "Oreo Latte",
    description: "Creamy latte infused with crushed Oreo cookies",
    prices: [
      { label: "Regular", amount: 250 },
      { label: "Large", amount: 300 },
    ],
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    category: "coffee",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and luxurious foam",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213",
    category: "coffee",
  },
  {
    id: "mocha-latte",
    name: "Mocha Latte",
    description: "Rich chocolate and espresso blend with steamed milk",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1",
    category: "coffee",
  },
  {
    id: "latte-macchiato",
    name: "Latte Macchiato",
    description: "Layered espresso and steamed milk with foam",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    category: "coffee",
  },
  {
    id: "oreo-macchiato",
    name: "Oreo Macchiato",
    description: "Macchiato with a delicious Oreo twist",
    prices: [
      { label: "Regular", amount: 250 },
      { label: "Large", amount: 300 },
    ],
    image: "https://images.unsplash.com/photo-1542181961-9590d0c79dab",
    category: "coffee",
  },
  {
    id: "malindi-macchiato",
    name: "Malindi Macchiato",
    description: "Tropical-inspired macchiato with coastal flavors",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "coffee",
  },
  {
    id: "mochaccino",
    name: "Mochaccino",
    description: "Decadent mocha and cappuccino fusion",
    prices: [{ amount: 380 }],
    image: "https://images.unsplash.com/photo-1578374173703-26bf38e5a9d8",
    category: "coffee",
  },
  {
    id: "wendo-house-coffee",
    name: "Wendo House Coffee",
    description: "Our signature house blend, perfectly roasted",
    prices: [
      { label: "Regular", amount: 150 },
      { label: "Large", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    category: "coffee",
  },
  {
    id: "coffee-syrups",
    name: "Coffee Syrups",
    description: "Vanilla, Caramel, Hazelnut, or Peppermint",
    prices: [{ amount: 100 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "coffee",
    note: "Add to any coffee drink",
  },

  // NON-COFFEE
  {
    id: "african-tea",
    name: "African Tea",
    description: "Traditional Kenyan tea, rich and aromatic",
    prices: [
      { label: "Small", amount: 100 },
      { label: "Large", amount: 180 },
    ],
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
    category: "non-coffee",
    dietary: "vegan",
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    description: "Spiced tea with aromatic Indian spices",
    prices: [
      { label: "Small", amount: 120 },
      { label: "Large", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1597318181672-6e3b9b4c94b6",
    category: "non-coffee",
    dietary: "vegetarian",
  },
  {
    id: "cardamon-tea",
    name: "Cardamon Tea",
    description: "Fragrant tea infused with cardamom",
    prices: [
      { label: "Small", amount: 120 },
      { label: "Large", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    category: "non-coffee",
    dietary: "vegan",
  },
  {
    id: "lemon-tea",
    name: "Lemon Tea",
    description: "Refreshing tea with fresh lemon",
    prices: [
      { label: "Small", amount: 120 },
      { label: "Large", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "non-coffee",
    dietary: "vegan",
  },
  {
    id: "malindi-chai-latte",
    name: "Malindi Chai Latte",
    description: "Spiced chai latte with coastal inspiration",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1578374173703-26bf38e5a9d8",
    category: "non-coffee",
    dietary: "vegetarian",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    description: "Rich and creamy hot chocolate",
    prices: [
      { label: "Regular", amount: 200 },
      { label: "Large", amount: 250 },
    ],
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed",
    category: "non-coffee",
    dietary: "vegetarian",
  },
  {
    id: "hot-dawa",
    name: "Hot Lemon, Ginger & Honey (Dawa)",
    description: "Traditional healing drink with lemon, ginger, and honey",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "non-coffee",
    dietary: "vegan",
  },
  {
    id: "hibiscus-dawa",
    name: "Hibiscus Dawa",
    description: "Refreshing hibiscus tea with healing spices",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "non-coffee",
    dietary: "vegan",
  },
  {
    id: "passion-dawa",
    name: "Passion Dawa",
    description: "Tropical passion fruit dawa blend",
    prices: [{ amount: 300 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "non-coffee",
    dietary: "vegan",
  },

  // ICED DRINKS
  {
    id: "iced-tea",
    name: "Iced Tea",
    description: "Refreshing cold tea served over ice",
    prices: [{ amount: 200 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "iced-drinks",
    dietary: "vegan",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Smooth cold latte over ice",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    category: "iced-drinks",
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    description: "Chocolate and espresso over ice",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    category: "iced-drinks",
  },
  {
    id: "iced-dawa",
    name: "Iced Dawa",
    description: "Cold version of our healing dawa drink",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "iced-drinks",
    dietary: "vegan",
  },
  {
    id: "iced-flavored-tea",
    name: "Iced Flavored Tea",
    description: "Iced tea with fresh juice of your choice",
    prices: [{ amount: 300 }],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "iced-drinks",
    dietary: "vegan",
  },

  // MILKSHAKES
  {
    id: "vanilla-shake",
    name: "Vanilla Milkshake",
    description: "Classic creamy vanilla shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Milkshake",
    description: "Rich chocolate shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "strawberry-shake",
    name: "Strawberry Milkshake",
    description: "Fresh strawberry shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "minty-pinaade",
    name: "Minty Pinaade",
    description: "Refreshing mint and pineapple blend",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "espresso-shake",
    name: "Espresso Milkshake",
    description: "Coffee lover's dream shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "mocha-shake",
    name: "Mocha Milkshake",
    description: "Chocolate and coffee shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "banana-shake",
    name: "Banana Milkshake",
    description: "Smooth banana shake",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "cookie-oreo-shake",
    name: "Cookie Oreo Milkshake",
    description: "Loaded with Oreo cookies",
    prices: [{ amount: 450 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "blueberry-shake",
    name: "Blueberry Milkshake",
    description: "Fresh blueberry shake",
    prices: [{ amount: 450 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "pistachio-shake",
    name: "Pistachio Milkshake",
    description: "Creamy pistachio shake",
    prices: [{ amount: 450 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },
  {
    id: "peanut-butter-shake",
    name: "Peanut Butter Milkshake",
    description: "Rich peanut butter shake",
    prices: [{ amount: 450 }],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    category: "milkshakes",
    dietary: "vegetarian",
  },

  // FRESH JUICES
  {
    id: "king-pineapple",
    name: "King Pineapple",
    description: "Fresh pineapple juice (seasonal)",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "fresh-juices",
    dietary: "vegan",
  },
  {
    id: "pulpy-mango",
    name: "Pulpy Mango",
    description: "Fresh mango juice (seasonal)",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "fresh-juices",
    dietary: "vegan",
  },
  {
    id: "passion-fruit",
    name: "Passion Fruit Passion",
    description: "Fresh passion fruit juice (seasonal)",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "fresh-juices",
    dietary: "vegan",
  },

  // BREAKFAST COMBOS
  {
    id: "full-wendo-breakfast",
    name: "Full Wendo Breakfast",
    description: "Complete breakfast with eggs, sausages, bacon, toast, and more",
    prices: [{ amount: 1050 }],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
    category: "breakfast-combos",
  },
  {
    id: "eggs-delight",
    name: "Eggs & Delight",
    description: "Delicious egg-based breakfast",
    prices: [{ amount: 350 }],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "cakes-delight",
    name: "Cakes & Delight",
    description: "Sweet pastries and treats",
    prices: [{ amount: 450 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "fluffy-tropical-pancakes",
    name: "Pancakes (Fluffy Tropical)",
    description: "Tropical-style fluffy pancakes",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "crepe",
    name: "Crepe",
    description: "Thin French-style pancake",
    prices: [{ amount: 180 }],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "banana-pancakes-combo",
    name: "Banana Pancakes",
    description: "Pancakes with fresh bananas",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "fluffy-pancakes-combo",
    name: "Fluffy Pancakes",
    description: "Classic fluffy pancakes",
    prices: [{ amount: 180 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "breakfast-combos",
    dietary: "vegetarian",
  },
  {
    id: "gooseberry-lemonade",
    name: "Gooseberry Lemonade",
    description: "Refreshing gooseberry lemonade",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "breakfast-combos",
    dietary: "vegan",
  },
  {
    id: "refreshing-lemonade",
    name: "Refreshing Lemonade",
    description: "Classic fresh lemonade",
    prices: [{ amount: 150 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "breakfast-combos",
    dietary: "vegan",
  },

  // BREAKFAST ITEMS
  {
    id: "chicken-on-bun",
    name: "Chicken on a Bun",
    description: "Grilled chicken on a soft bun",
    prices: [{ amount: 350 }],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    category: "breakfast",
  },
  {
    id: "sausage-on-bun",
    name: "Sausage on a Bun",
    description: "Savory sausage on a bun",
    prices: [{ amount: 200 }],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    category: "breakfast",
  },
  {
    id: "strawberry-passion-hibiscus",
    name: "Strawberry Passion Hibiscus",
    description: "Fruity hibiscus drink blend",
    prices: [{ amount: 300 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "breakfast",
    dietary: "vegan",
  },
  {
    id: "sunny-citrus",
    name: "Sunny Citrus",
    description: "Bright citrus juice blend",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "breakfast",
    dietary: "vegan",
  },
  {
    id: "roasted-passion",
    name: "Roasted Passion",
    description: "Roasted passion fruit drink",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    category: "breakfast",
    dietary: "vegan",
  },

  // LUNCH & MAINS
  {
    id: "chicken-delight",
    name: "Chicken Delight",
    description: "Delicious chicken dish",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
    category: "lunch",
  },
  {
    id: "full-breakfast-lunch",
    name: "Full Wendo Breakfast",
    description: "Also available for lunch",
    prices: [{ amount: 1050 }],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
    category: "lunch",
  },

  // PANCAKES (I-PANCAKES)
  {
    id: "wendo-special-pancake",
    name: "Wendo Special",
    description: "Our signature pancake creation",
    prices: [{ amount: 350 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "pancakes",
    dietary: "vegetarian",
  },
  {
    id: "mega-mix-pancake",
    name: "Mega Mix",
    description: "Mixed flavors pancake",
    prices: [{ amount: 350 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "pancakes",
    dietary: "vegetarian",
  },
  {
    id: "nutella-pancake",
    name: "Nutella Pancake",
    description: "Pancakes with Nutella spread",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "pancakes",
    dietary: "vegetarian",
  },
  {
    id: "mochaccino-pancake",
    name: "Mochaccino Pancake",
    description: "Coffee and chocolate pancakes",
    prices: [{ amount: 250 }],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    category: "pancakes",
    dietary: "vegetarian",
  },

  // WRAPS & BURGERS
  {
    id: "vegetable-wrap",
    name: "Vegetable Wrap",
    description: "Fresh vegetables in a wrap",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    category: "wraps",
    dietary: "vegetarian",
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    description: "Grilled chicken wrap",
    prices: [{ amount: 600 }],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    category: "wraps",
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    description: "Juicy beef burger with cheese",
    prices: [{ amount: 650 }],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "wraps",
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Grilled chicken burger",
    prices: [{ amount: 700 }],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    category: "wraps",
  },

  // PIZZA
  {
    id: "margarita-pizza",
    name: "Margarita",
    description: "Classic tomato, mozzarella, and basil",
    prices: [{ amount: 800 }],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    category: "pizza",
    dietary: "vegetarian",
  },
  {
    id: "e-funghi-pizza",
    name: "E-Funghi",
    description: "Mushroom pizza",
    prices: [{ amount: 900 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
    dietary: "vegetarian",
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian",
    description: "Ham and pineapple",
    prices: [{ amount: 900 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken",
    description: "BBQ chicken with onions",
    prices: [{ amount: 1000 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "boerewors-pizza",
    name: "Boerewors",
    description: "South African sausage pizza",
    prices: [{ amount: 900 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "chicken-bacon-pizza",
    name: "Chicken & Bacon",
    description: "Chicken and crispy bacon",
    prices: [{ amount: 1200 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "meat-deluxe-pizza",
    name: "Meat Deluxe",
    description: "Loaded with assorted meats",
    prices: [{ amount: 1600 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "sausage-bacon-pizza",
    name: "Sausage & Bacon",
    description: "Sausage and bacon combo",
    prices: [{ amount: 1300 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "prosciutto-pizza",
    name: "Prosciutto",
    description: "Italian cured ham pizza",
    prices: [{ amount: 900 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
  },
  {
    id: "pizza-extra-toppings",
    name: "Extra Toppings",
    description: "Add extra toppings to any pizza",
    prices: [{ amount: 150 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "pizza",
    note: "Per topping",
  },

  // ORIENTAL DISHES
  {
    id: "sizzling-pork-teriyaki",
    name: "Sizzling Pork Teriyaki",
    description: "Pork in teriyaki sauce, served sizzling",
    prices: [{ amount: 800 }],
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
    category: "oriental",
  },
  {
    id: "curry-mama",
    name: "Curry Mama",
    description: "Rich curry dish",
    prices: [{ amount: 800 }],
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
    category: "oriental",
  },

  // PASTRIES
  {
    id: "mushroom-pastry",
    name: "Mushroom Pastry",
    description: "Savory mushroom pastry",
    prices: [{ amount: 650 }],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "pastries",
    dietary: "vegetarian",
  },
  {
    id: "caramella-pastry",
    name: "Caramella",
    description: "Sweet caramel pastry",
    prices: [{ amount: 600 }],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "pastries",
    dietary: "vegetarian",
  },
  {
    id: "blueberries-pastry",
    name: "Blueberries Pastry",
    description: "Fresh blueberry pastry",
    prices: [{ amount: 700 }],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "pastries",
    dietary: "vegetarian",
  },
  {
    id: "avocado-pastry",
    name: "Avocado Pastry",
    description: "Unique avocado-filled pastry",
    prices: [{ amount: 600 }],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "pastries",
    dietary: "vegetarian",
  },

  // SALADS
  {
    id: "tropical-salad",
    name: "Tropical Salad",
    description: "Fresh tropical fruit and vegetable salad",
    prices: [{ amount: 400 }],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    category: "salads",
    dietary: "vegan",
  },
  {
    id: "wendo-salad",
    name: "Wendo Salad",
    description: "House signature salad",
    prices: [{ amount: 350 }],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    category: "salads",
    dietary: "vegetarian",
  },
  {
    id: "fruit-salad",
    name: "Fruit Salad",
    description: "Fresh seasonal fruits",
    prices: [
      { label: "Regular", amount: 350 },
      { label: "Large", amount: 400 },
    ],
    image: "https://images.unsplash.com/photo-1564093497595-593b96d80180",
    category: "salads",
    dietary: "vegan",
  },
];

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "food-drinks", name: "Food & Drinks" },
  { id: "interior", name: "Interior" },
  { id: "events", name: "Events" },
] as const;

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "food-drinks" | "interior" | "events";
};

// Gallery Images
export const GALLERY_IMAGES: GalleryImage[] = [
  // Food & Drinks
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    alt: "Barista preparing coffee",
    category: "food-drinks",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    alt: "Fresh pastries and coffee",
    category: "food-drinks",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    alt: "Gourmet pizza",
    category: "food-drinks",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    alt: "Specialty coffee drink",
    category: "food-drinks",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    alt: "Stack of pancakes",
    category: "food-drinks",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    alt: "Colorful milkshakes",
    category: "food-drinks",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    alt: "Fresh fruit juices",
    category: "food-drinks",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    alt: "Gourmet burger",
    category: "food-drinks",
  },

  // Interior
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    alt: "Cozy cafe interior",
    category: "interior",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
    alt: "Green plants in bistro",
    category: "interior",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
    alt: "Coffee bar setup",
    category: "interior",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    alt: "Comfortable seating area",
    category: "interior",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    alt: "Dining tables and chairs",
    category: "interior",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760",
    alt: "Modern bistro design",
    category: "interior",
  },

  // Events
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    alt: "Coffee tasting event",
    category: "events",
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    alt: "Group gathering at cafe",
    category: "events",
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    alt: "Friends enjoying coffee together",
    category: "events",
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    alt: "Social event at bistro",
    category: "events",
  },
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "People dining and chatting",
    category: "events",
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    alt: "Cafe community event",
    category: "events",
  },
];
