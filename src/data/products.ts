
import { Product } from '@/components/ProductCard';

export const products: Product[] = [
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
    name: "Flamora House Blend",
    description: "Our signature blend combining beans from Brazil, Colombia, and Ethiopia for a balanced cup with notes of chocolate, caramel, and a hint of berry.",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Blend",
    funFact: "Our head barista spends three months developing this perfect blend!"
  },
  {
    id: 3,
    name: "Pour-Over Kit",
    description: "Everything you need to brew the perfect pour-over coffee at home. Includes a ceramic dripper, filters, and a precision kettle.",
    price: "₹2,850",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    category: "Equipment"
  },
  {
    id: 4,
    name: "Colombia Supremo",
    description: "Medium-roasted beans from the highlands of Colombia with notes of caramel, apple, and a slightly nutty finish.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1599639668273-7ef57c40a589?q=80&w=2073",
    category: "Single Origin",
    funFact: "Colombia Supremo beans are among the largest coffee beans in the world!"
  },
  {
    id: 5,
    name: "Elegant Ceramic Mug",
    description: "Hand-crafted ceramic mug with a beautiful watercolor-inspired design. Each piece is unique.",
    price: "₹480",
    image: "https://images.unsplash.com/photo-1572119865085-43185a7ebb41?q=80&w=2070",
    category: "Merchandise"
  },
  {
    id: 6,
    name: "Cold Brew Concentrate",
    description: "Our special 24-hour steeped cold brew concentrate. Smooth, low acidity, with notes of chocolate and berries.",
    price: "₹750",
    image: "https://images.unsplash.com/photo-1617128734662-66da6a1e31d0?q=80&w=1974",
    category: "Ready to Drink",
    featured: true
  },
  {
    id: 7,
    name: "Sumatra Mandheling",
    description: "Dark-roasted coffee with earthy, spicy notes and a full body. Perfect for espresso or French press.",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Single Origin"
  },
  {
    id: 8,
    name: "Coffee Subscription Box",
    description: "Receive two bags of our curated coffee selections each month, with tasting notes and brewing recommendations.",
    price: "₹1,100/month",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=2070",
    category: "Subscription",
    featured: true,
    funFact: "Our subscription members get access to limited-edition seasonal coffees not available to the public."
  },
  {
    id: 9,
    name: "Espresso Tamper",
    description: "Professional-grade stainless steel tamper with ergonomic wooden handle. 58mm diameter.",
    price: "₹1,250",
    image: "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?q=80&w=1974",
    category: "Equipment"
  },
  {
    id: 10,
    name: "Vanilla Bean Syrup",
    description: "House-made vanilla bean syrup for flavoring your coffee. Made with real Madagascar vanilla beans.",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974",
    category: "Add-ons"
  },
  {
    id: 11,
    name: "French Press",
    description: "Elegant glass and stainless steel French press. Makes 4 cups of rich, full-bodied coffee.",
    price: "₹1,850",
    image: "https://images.unsplash.com/photo-1570887259220-1ec898b1803b?q=80&w=2072",
    category: "Equipment",
    featured: true
  },
  {
    id: 12,
    name: "Coffee Tasting Experience",
    description: "A guided tasting of 5 different coffees from around the world. Learn about origins, processing methods, and flavor profiles.",
    price: "₹950/person",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
    category: "Experiences",
    funFact: "Our coffee sommeliers have visited over 50 coffee farms around the world!"
  }
];

export const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Single Origin", value: "Single Origin" },
  { label: "Blends", value: "Blend" },
  { label: "Equipment", value: "Equipment" },
  { label: "Merchandise", value: "Merchandise" },
  { label: "Ready to Drink", value: "Ready to Drink" },
  { label: "Subscription", value: "Subscription" }
];
