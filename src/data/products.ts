
import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  // Single Origin Coffee Beans
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    description: "A light-roasted coffee with delicate floral and citrus notes. Perfect for pour-over brewing methods.",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070",
    category: "Single Origin",
    featured: true,
    funFact: "Yirgacheffe is often called the 'birthplace of coffee' and was first discovered growing wild in Ethiopian forests."
  },
  {
    id: 2,
    name: "Colombia Supremo",
    description: "Medium-roasted beans from the highlands of Colombia with notes of caramel, apple, and a slightly nutty finish.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1599639668273-7ef57c40a589?q=80&w=2073",
    category: "Single Origin",
    funFact: "Colombia Supremo beans are among the largest coffee beans in the world!"
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Dark-roasted coffee with earthy, spicy notes and a full body. Perfect for espresso or French press.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Single Origin"
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    description: "Medium to dark roast with complex flavors of chocolate, spice and subtle fruit notes with a clean finish.",
    price: "₹625",
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?q=80&w=1974",
    category: "Single Origin",
    funFact: "Coffee from Antigua Valley, Guatemala is grown at elevations over 4,600 feet surrounded by three volcanoes."
  },
  {
    id: 5,
    name: "Kenya AA",
    description: "Bright and bold with a fruity acidity, wine-like characteristics and a rich body.",
    price: "₹700",
    image: "https://images.unsplash.com/photo-1606791405792-1004f1d3cb00?q=80&w=1974",
    category: "Single Origin"
  },
  {
    id: 6,
    name: "Costa Rica Tarrazu",
    description: "Well-balanced brightness and delightful aromatics with notes of chocolate and citrus.",
    price: "₹675",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    category: "Single Origin",
    funFact: "The Tarrazu region is known as the 'Napa Valley' of Costa Rican coffee."
  },
  {
    id: 7,
    name: "Panama Geisha",
    description: "One of the world's most exquisite coffees with jasmine, bergamot, and peach-like flavors.",
    price: "₹950",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937",
    category: "Single Origin",
    featured: true
  },
  {
    id: 8,
    name: "Brazil Santos",
    description: "Smooth, mild and sweet with notes of chocolate and nuts. Low acidity makes it perfect for espresso.",
    price: "₹575",
    image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=2070",
    category: "Single Origin"
  },
  
  // Coffee Blends
  {
    id: 9,
    name: "Flamora House Blend",
    description: "Our signature blend combining beans from Brazil, Colombia, and Ethiopia for a balanced cup with notes of chocolate, caramel, and a hint of berry.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Blend",
    funFact: "Our head barista spends three months developing this perfect blend!"
  },
  {
    id: 10,
    name: "Morning Glory Blend",
    description: "A bright, medium-roasted blend perfect for starting your day with notes of citrus and brown sugar.",
    price: "₹525",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1970",
    category: "Blend"
  },
  {
    id: 11,
    name: "Midnight Express",
    description: "A dark, bold blend with smoky, bittersweet chocolate notes and a robust finish.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1566657040726-62fd1e179ae7?q=80&w=1974",
    category: "Blend",
    funFact: "This powerful blend contains beans from three continents, carefully selected for their intensity."
  },
  {
    id: 12,
    name: "Velvet Symphony",
    description: "A smooth, medium-dark blend with notes of caramel, toasted nuts, and dark chocolate.",
    price: "₹575",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2070",
    category: "Blend"
  },
  {
    id: 13,
    name: "Espresso Perfetto",
    description: "Crafted specifically for espresso with a perfect balance of sweetness, acidity, and body.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1565452344681-6f19bc620ad1?q=80&w=1973",
    category: "Blend",
    featured: true
  },
  
  // Equipment
  {
    id: 14,
    name: "Pour-Over Kit",
    description: "Everything you need to brew the perfect pour-over coffee at home. Includes a ceramic dripper, filters, and a precision kettle.",
    price: "₹2,850",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    category: "Equipment"
  },
  {
    id: 15,
    name: "French Press",
    description: "Elegant glass and stainless steel French press. Makes 4 cups of rich, full-bodied coffee.",
    price: "₹1,850",
    image: "https://images.unsplash.com/photo-1570887259220-1ec898b1803b?q=80&w=2072",
    category: "Equipment",
    featured: true
  },
  {
    id: 16,
    name: "Espresso Tamper",
    description: "Professional-grade stainless steel tamper with ergonomic wooden handle. 58mm diameter.",
    price: "₹1,250",
    image: "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 17,
    name: "Precision Coffee Scale",
    description: "Accurate to 0.1g with a built-in timer for perfect brewing consistency.",
    price: "₹1,950",
    image: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?q=80&w=2070",
    category: "Equipment"
  },
  {
    id: 18,
    name: "Professional Burr Grinder",
    description: "40 grind settings from fine espresso to coarse French press with consistent particle size.",
    price: "₹4,250",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974",
    category: "Equipment",
    funFact: "A quality burr grinder is arguably the most important piece of coffee equipment for brewing excellence."
  },
  {
    id: 19,
    name: "Gooseneck Kettle",
    description: "Precision pour control with temperature regulation for optimal extraction.",
    price: "₹2,150",
    image: "https://images.unsplash.com/photo-1565600929608-1c864ae6c4b8?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 20,
    name: "AeroPress",
    description: "Versatile brewing device that creates smooth, rich coffee with low acidity.",
    price: "₹1,650",
    image: "https://images.unsplash.com/photo-1637431986769-52f9a0a6c609?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 21,
    name: "Cold Brew System",
    description: "Glass container with stainless steel filter for creating smooth cold brew concentrate.",
    price: "₹1,850",
    image: "https://images.unsplash.com/photo-1576388352476-70674c706c58?q=80&w=1974",
    category: "Equipment"
  },
  
  // Merchandise
  {
    id: 22,
    name: "Elegant Ceramic Mug",
    description: "Hand-crafted ceramic mug with a beautiful watercolor-inspired design. Each piece is unique.",
    price: "₹480",
    image: "https://images.unsplash.com/photo-1572119865085-43185a7ebb41?q=80&w=2070",
    category: "Merchandise"
  },
  {
    id: 23,
    name: "Thermal Travel Mug",
    description: "Double-walled stainless steel mug that keeps drinks hot for 6 hours or cold for 12 hours.",
    price: "₹950",
    image: "https://images.unsplash.com/photo-1577937927133-94a24bf9b184?q=80&w=1964",
    category: "Merchandise"
  },
  {
    id: 24,
    name: "Flamora Branded Tote",
    description: "Premium canvas tote bag perfect for carrying your coffee purchases or daily essentials.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1614179818511-4b5d3d5d5e9c?q=80&w=1974",
    category: "Merchandise"
  },
  {
    id: 25,
    name: "Coffee Journal",
    description: "Leather-bound journal for recording your coffee tastings and brewing recipes.",
    price: "₹750",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1974",
    category: "Merchandise",
    funFact: "Keeping a coffee journal can help you identify your flavor preferences and improve your brewing techniques."
  },
  {
    id: 26,
    name: "Barista Apron",
    description: "Professional-grade waxed canvas apron with leather straps and multiple pockets.",
    price: "₹1,250",
    image: "https://images.unsplash.com/photo-1565192259022-0835597de620?q=80&w=1974",
    category: "Merchandise"
  },
  
  // Ready to Drink
  {
    id: 27,
    name: "Cold Brew Concentrate",
    description: "Our special 24-hour steeped cold brew concentrate. Smooth, low acidity, with notes of chocolate and berries.",
    price: "₹750",
    image: "https://images.unsplash.com/photo-1617128734662-66da6a1e31d0?q=80&w=1974",
    category: "Ready to Drink",
    featured: true
  },
  {
    id: 28,
    name: "Nitro Cold Brew",
    description: "Nitrogen-infused cold brew with a creamy, stout-like texture and natural sweetness.",
    price: "₹275",
    image: "https://images.unsplash.com/photo-1558116375-4ce3e7604263?q=80&w=1974",
    category: "Ready to Drink"
  },
  {
    id: 29,
    name: "Bottled Mocha Latte",
    description: "Ready-to-drink blend of our espresso, chocolate, and creamy milk.",
    price: "₹225",
    image: "https://images.unsplash.com/photo-1603126857599-f935e8f5c31e?q=80&w=1974",
    category: "Ready to Drink"
  },
  {
    id: 30,
    name: "Chai Concentrate",
    description: "Our house-made blend of black tea and spices. Mix with milk for a perfect chai latte.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1974",
    category: "Ready to Drink",
    funFact: "Our chai recipe is inspired by traditional methods from Kerala, India."
  },
  
  // Add-ons
  {
    id: 31,
    name: "Vanilla Bean Syrup",
    description: "House-made vanilla bean syrup for flavoring your coffee. Made with real Madagascar vanilla beans.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Add-ons"
  },
  {
    id: 32,
    name: "Organic Honey Sticks",
    description: "Pure, locally-sourced honey in convenient single-serving sticks.",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1618337915116-0f68a133a1a9?q=80&w=1965",
    category: "Add-ons"
  },
  {
    id: 33,
    name: "Artisanal Sugar Cubes",
    description: "Hand-crafted infused sugar cubes in flavors like cinnamon, cardamom, and vanilla.",
    price: "₹275",
    image: "https://images.unsplash.com/photo-1537100861360-5ac536b5c470?q=80&w=1974",
    category: "Add-ons"
  },
  {
    id: 34,
    name: "Chocolate Covered Espresso Beans",
    description: "Our house-roasted espresso beans enrobed in premium dark chocolate.",
    price: "₹325",
    image: "https://images.unsplash.com/photo-1505714182522-dfd754a499e5?q=80&w=1974",
    category: "Add-ons"
  },
  
  // Subscription
  {
    id: 35,
    name: "Coffee Subscription Box",
    description: "Receive two bags of our curated coffee selections each month, with tasting notes and brewing recommendations.",
    price: "₹1,100/month",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070",
    category: "Subscription",
    featured: true,
    funFact: "Our subscription members get access to limited-edition seasonal coffees not available to the public."
  },
  {
    id: 36,
    name: "Coffee Explorer Subscription",
    description: "For the adventurous coffee lover. Receive unique single-origin coffees from around the world every month.",
    price: "₹1,300/month",
    image: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1974",
    category: "Subscription"
  },
  {
    id: 37,
    name: "Espresso Lover's Subscription",
    description: "Monthly delivery of our premium espresso blends, perfect for those who love rich, intense coffee.",
    price: "₹1,200/month",
    image: "https://images.unsplash.com/photo-1551610290-e153ec567dd8?q=80&w=1974",
    category: "Subscription"
  },
  
  // Experiences
  {
    id: 38,
    name: "Coffee Tasting Experience",
    description: "A guided tasting of 5 different coffees from around the world. Learn about origins, processing methods, and flavor profiles.",
    price: "₹950/person",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    category: "Experiences",
    funFact: "Our coffee sommeliers have visited over 50 coffee farms around the world!"
  },
  {
    id: 39,
    name: "Barista Workshop",
    description: "Learn professional barista skills in this hands-on 3-hour workshop. Take home a bag of coffee and a certificate.",
    price: "₹1,850/person",
    image: "https://images.unsplash.com/photo-1459257831348-f0cdd359f5fe?q=80&w=2070",
    category: "Experiences"
  },
  {
    id: 40,
    name: "Latte Art Class",
    description: "Master the art of creating beautiful designs in your lattes in this 2-hour class.",
    price: "₹1,450/person",
    image: "https://images.unsplash.com/photo-1569345355279-d6bd0d4c9926?q=80&w=1974",
    category: "Experiences",
    featured: true
  },
  {
    id: 41,
    name: "Coffee and Chocolate Pairing",
    description: "Experience the perfect harmony of fine chocolates paired with complementary coffee selections.",
    price: "₹1,250/person",
    image: "https://images.unsplash.com/photo-1548329408-f048694e2a33?q=80&w=1974",
    category: "Experiences"
  },
  
  // Additional equipment items
  {
    id: 42,
    name: "Manual Ceramic Grinder",
    description: "Portable ceramic burr grinder perfect for travel or camping.",
    price: "₹1,450",
    image: "https://images.unsplash.com/photo-1565194177869-338ae7afdec3?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 43,
    name: "Espresso Machine",
    description: "Semi-automatic espresso machine for home use with built-in grinder and steam wand.",
    price: "₹24,500",
    image: "https://images.unsplash.com/photo-1619452235642-4e952b41334c?q=80&w=1974",
    category: "Equipment",
    funFact: "Our espresso machines are calibrated by championship-level baristas before shipping."
  },
  {
    id: 44,
    name: "Chemex Brewer",
    description: "Iconic glass pour-over brewer that produces a clean, refined cup.",
    price: "₹2,250",
    image: "https://images.unsplash.com/photo-1561187273-9a6c1a4a5052?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 45,
    name: "V60 Ceramic Dripper",
    description: "Japanese-designed conical dripper for a bright, clean cup with fantastic clarity.",
    price: "₹1,150",
    image: "https://images.unsplash.com/photo-1560107122-48ef482b5ec7?q=80&w=1974",
    category: "Equipment"
  },
  
  // Additional merchandise
  {
    id: 46,
    name: "Limited Edition Print",
    description: "Coffee-themed art print by local artist, individually numbered and signed.",
    price: "₹1,850",
    image: "https://images.unsplash.com/photo-1514559624324-8734a2567368?q=80&w=1974",
    category: "Merchandise"
  },
  {
    id: 47,
    name: "Flamora T-Shirt",
    description: "Organic cotton t-shirt featuring our signature watercolor logo design.",
    price: "₹850",
    image: "https://images.unsplash.com/photo-1534859108275-a3a6f52f0d52?q=80&w=1974",
    category: "Merchandise"
  },
  {
    id: 48,
    name: "Coffee Scented Candle",
    description: "Hand-poured soy wax candle with notes of freshly roasted coffee, vanilla, and caramel.",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1603006905393-440dc303a4a4?q=80&w=1974",
    category: "Merchandise"
  },
  {
    id: 49,
    name: "Cupping Spoons Set",
    description: "Professional-grade stainless steel spoons for coffee tasting and evaluation.",
    price: "₹950",
    image: "https://images.unsplash.com/photo-1572119865085-43185a7ebb41?q=80&w=2070",
    category: "Merchandise"
  },
  {
    id: 50,
    name: "Coffee Plant",
    description: "Live Coffea arabica plant in decorative ceramic pot. Grow your own coffee at home!",
    price: "₹1,250",
    image: "https://images.unsplash.com/photo-1608502484770-277778076298?q=80&w=1964",
    category: "Merchandise",
    funFact: "It takes about 4 years for a new coffee plant to produce its first fruit (coffee cherries)."
  },
];

export const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Single Origin", value: "Single Origin" },
  { label: "Blends", value: "Blend" },
  { label: "Equipment", value: "Equipment" },
  { label: "Merchandise", value: "Merchandise" },
  { label: "Ready to Drink", value: "Ready to Drink" },
  { label: "Add-ons", value: "Add-ons" },
  { label: "Subscription", value: "Subscription" },
  { label: "Experiences", value: "Experiences" }
];
