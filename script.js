// Data for Marketplace
const restaurants = [
    { id: 101, name: "The Burger Loft", rating: 4.8, time: "20-25 mins", cuisines: "Gourmet Burgers, Sides", price: "₹250 for one", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80", veg: false },
    { id: 102, name: "Artisan Pizza Co", rating: 4.6, time: "30-35 mins", cuisines: "Woodfired Pizza, Italian", price: "₹400 for one", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 103, name: "Velvet Waffles", rating: 4.9, time: "15 mins", cuisines: "Belgian Waffles, Cafe", price: "₹200 for one", img: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 104, name: "Royal Biryani House", rating: 4.7, time: "40 mins", cuisines: "Hyderabadi, Mughlai", price: "₹450 for one", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80", veg: false },
    { id: 105, name: "Sushi Sensation", rating: 4.5, time: "35 mins", cuisines: "Japanese, Sushi, Seafood", price: "₹600 for one", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", veg: false },
    { id: 106, name: "Green Garden Salad", rating: 4.4, time: "20 mins", cuisines: "Salads, Healthy, Vegan", price: "₹300 for one", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 107, name: "Delhi Chaat Corner", rating: 4.3, time: "15 mins", cuisines: "Street Food, North Indian", price: "₹150 for one", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 108, name: "Wok on Fire", rating: 4.6, time: "25 mins", cuisines: "Chinese, Thai, Pan-Asian", price: "₹350 for one", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80", veg: false },
    { id: 109, name: "The Pasta Project", rating: 4.7, time: "30 mins", cuisines: "Italian, Pasta, Desserts", price: "₹450 for one", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 110, name: "Southern Spice", rating: 4.8, time: "25 mins", cuisines: "South Indian, Kerala, Tamil", price: "₹250 for one", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", veg: true },
    { id: 111, name: "Steakhouse Prime", rating: 4.9, time: "45 mins", cuisines: "American, Steak, Grill", price: "₹800 for one", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80", veg: false },
    { id: 112, name: "Coffee & Crumbs", rating: 4.4, time: "15 mins", cuisines: "Bakery, Coffee, Breakfast", price: "₹200 for one", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", veg: true }
];

const dineoutEscapes = [
    { id: 201, name: "The Crystal Lounge", rating: 4.9, type: "Fine Dining", locality: "Skyline Towers", offer: "Flat 50% OFF", price: "₹2,500 for two", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", tags: ["trending", "5-star"] },
    { id: 202, name: "Empire Rooftop", rating: 4.8, type: "Gastro Pub", locality: "Downtown", offer: "Buy 1 Get 1 Free", price: "₹1,800 for two", img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80", tags: ["trending", "outdoor"] },
    { id: 203, name: "The Gilded Fork", rating: 4.9, type: "Contemporary Indian", locality: "Heritage Square", offer: "Complimentary Wine", price: "₹3,000 for two", img: "https://images.unsplash.com/photo-1517248135467-4c7ed9d8c47c?auto=format&fit=crop&w=800&q=80", tags: ["5-star"] },
    { id: 204, name: "Moonlight Terrace", rating: 4.6, type: "Romantic Dining", locality: "West End", offer: "Candlelight Special", price: "₹2,200 for two", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", tags: ["outdoor", "happy-hours"] },
    { id: 205, name: "Oasis Garden", rating: 4.4, type: "Coastal Flavors", locality: "Beach Road", offer: "Happy Hour Drinks", price: "₹1,500 for two", img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80", tags: ["outdoor", "happy-hours"] },
    { id: 206, name: "The Royal Oak", rating: 4.7, type: "Premium Steakhouse", locality: "Tech Park", offer: "Flat 25% OFF", price: "₹3,500 for two", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80", tags: ["5-star", "trending"] },
    { id: 207, name: "Spice Symphony", rating: 4.5, type: "Pan-Asian", locality: "South City", offer: "15% off on Buffet", price: "₹1,200 for two", img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80", tags: ["trending", "buffet"] },
    { id: 208, name: "Bella Italia", rating: 4.8, type: "Italian Bistro", locality: "Central Mall", offer: "Pasta Special ₹999", price: "₹2,000 for two", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", tags: ["5-star"] },
    { id: 209, name: "The Grill House", rating: 4.3, type: "BBQ & Grill", locality: "Uptown", offer: "Free Mocktail", price: "₹1,400 for two", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80", tags: ["outdoor"] },
    { id: 210, name: "Zen Garden", rating: 4.9, type: "Japanese & Sushi", locality: "Airport Road", offer: "Sashimi Platter @50%", price: "₹4,000 for two", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80", tags: ["5-star", "trending"] },
    { id: 211, name: "Indigo Deli", rating: 4.4, type: "European Cuisine", locality: "Cross Roads", offer: "Flat 20% OFF", price: "₹1,800 for two", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80", tags: ["happy-hours"] },
    { id: 212, name: "The Maharaja", rating: 4.7, type: "North Indian", locality: "Old Town", offer: "Thali Special Free Drink", price: "₹1,500 for two", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", tags: ["trending"] },
    { id: 213, name: "Seafood Marina", rating: 4.6, type: "Fresh Seafood", locality: "Harbor View", offer: "Buy 1 Get 1 Starter", price: "₹2,800 for two", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", tags: ["outdoor"] },
    { id: 214, name: "The Brew Estate", rating: 4.2, type: "Microbrewery", locality: "Silicon Valley", offer: "Happy Hours 4-8 PM", price: "₹2,200 for two", img: "https://images.unsplash.com/photo-1555658636-6e4a36214647?auto=format&fit=crop&w=800&q=80", tags: ["happy-hours"] },
    { id: 215, name: "Velvet Room", rating: 5.0, type: "Luxe Bar", locality: "Grand Hyatt", offer: "Exclusive Entry", price: "₹6,000 for two", img: "https://images.unsplash.com/photo-1566417713940-db521f4e30ad?auto=format&fit=crop&w=800&q=80", tags: ["5-star", "trending"] },
    { id: 216, name: "Mama Mia", rating: 4.5, type: "Pizzeria", locality: "Little Italy", offer: "Large Pizza ₹499", price: "₹1,200 for two", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", tags: ["trending"] },
    { id: 217, name: "Coastal Reef", rating: 4.8, type: "Beachfront", locality: "Palm Jumeirah", offer: "Sunset Cocktails 1+1", price: "₹4,500 for two", img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80", tags: ["outdoor", "5-star"] },
    { id: 218, name: "The Bistro", rating: 4.6, type: "French Gourmet", locality: "Park Avenue", offer: "3-Course Meal ₹1999", price: "₹3,200 for two", img: "https://images.unsplash.com/photo-1550966842-886910901e3d?auto=format&fit=crop&w=800&q=80", tags: ["5-star"] },
    { id: 219, name: "Urban Tadka", rating: 4.4, type: "Modern Indian", locality: "Metro Point", offer: "Flat 15% off", price: "₹1,400 for two", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", tags: ["trending", "happy-hours"] },
    { id: 220, name: "Tuscany Grill", rating: 4.7, type: "Mediterranean", locality: "Executive Enclave", offer: "Free Dessert", price: "₹2,600 for two", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", tags: ["outdoor", "5-star"] }
];

const menuItems = [
    // 🍕 Pizza
    { id:  1, name: "Margherita", category: "Pizza", price: 299, rating: 4.8, img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80" },
    { id:  2, name: "Farmhouse", category: "Pizza", price: 399, rating: 4.7, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80" },
    { id:  3, name: "Pepperoni", category: "Pizza", price: 449, rating: 4.9, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" },
    { id:  4, name: "Veggie Supreme", category: "Pizza", price: 429, rating: 4.6, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
    { id:  5, name: "Cheese Burst", category: "Pizza", price: 499, rating: 4.9, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
    { id:  6, name: "BBQ Chicken", category: "Pizza", price: 479, rating: 4.8, img: "https://images.unsplash.com/photo-1565299585323-38d6b086ee2c?auto=format&fit=crop&w=400&q=80" },
    { id:  7, name: "Paneer Tikka Pizza", category: "Pizza", price: 389, rating: 4.7, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80" },
    { id:  8, name: "Mushroom Delight", category: "Pizza", price: 359, rating: 4.5, img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=400&q=80" },
    { id:  9, name: "Hawaiian", category: "Pizza", price: 399, rating: 4.4, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
    { id: 10, name: "Four Cheese", category: "Pizza", price: 549, rating: 4.9, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "Mexican Green Wave", category: "Pizza", price: 429, rating: 4.6, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
    { id: 12, name: "Chicken Sausage", category: "Pizza", price: 459, rating: 4.7, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" },
    { id: 13, name: "Corn & Cheese", category: "Pizza", price: 349, rating: 4.5, img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?auto=format&fit=crop&w=400&q=80" },
    { id: 14, name: "Spicy Veg", category: "Pizza", price: 329, rating: 4.6, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80" },
    { id: 15, name: "Garlic Bread Pizza", category: "Pizza", price: 299, rating: 4.8, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },

    // 🍔 Burger
    { id: 16, name: "Veg Burger", category: "Burger", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" },
    { id: 17, name: "Chicken Burger", category: "Burger", price: 149, rating: 4.5, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { id: 18, name: "Cheese Burger", category: "Burger", price: 179, rating: 4.6, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80" },
    { id: 19, name: "Double Patty Burger", category: "Burger", price: 249, rating: 4.8, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" },
    { id: 20, name: "Paneer Burger", category: "Burger", price: 159, rating: 4.5, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" },
    { id: 21, name: "Crispy Chicken Burger", category: "Burger", price: 189, rating: 4.7, img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=400&q=80" },
    { id: 22, name: "BBQ Burger", category: "Burger", price: 219, rating: 4.6, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
    { id: 23, name: "Aloo Tikki Burger", category: "Burger", price: 79, rating: 4.3, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" },
    { id: 24, name: "Fish Burger", category: "Burger", price: 229, rating: 4.4, img: "https://images.unsplash.com/photo-1510629900063-507906d22935?auto=format&fit=crop&w=400&q=80" },
    { id: 25, name: "Mushroom Burger", category: "Burger", price: 199, rating: 4.5, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80" },
    { id: 26, name: "Spicy Veg Burger", category: "Burger", price: 129, rating: 4.4, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" },
    { id: 27, name: "Peri Peri Burger", category: "Burger", price: 169, rating: 4.6, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" },
    { id: 28, name: "Egg Burger", category: "Burger", price: 119, rating: 4.3, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" },
    { id: 29, name: "Jumbo Burger", category: "Burger", price: 299, rating: 4.9, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { id: 30, name: "Classic American Burger", category: "Burger", price: 259, rating: 4.8, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80" },

    // 🍛 Biryani
    { id: 31, name: "Chicken Biryani", category: "Biryani", price: 299, rating: 4.9, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80" },
    { id: 32, name: "Mutton Biryani", category: "Biryani", price: 399, rating: 4.9, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=400&q=80" },
    { id: 33, name: "Veg Biryani", category: "Biryani", price: 249, rating: 4.6, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 34, name: "Egg Biryani", category: "Biryani", price: 219, rating: 4.5, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" },
    { id: 35, name: "Hyderabadi Biryani", category: "Biryani", price: 329, rating: 4.9, img: "https://images.unsplash.com/photo-1596797038583-bc81878cb933?auto=format&fit=crop&w=400&q=80" },
    { id: 36, name: "Lucknowi Biryani", category: "Biryani", price: 349, rating: 4.8, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80" },
    { id: 37, name: "Kolkata Biryani", category: "Biryani", price: 299, rating: 4.7, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=400&q=80" },
    { id: 38, name: "Paneer Biryani", category: "Biryani", price: 279, rating: 4.6, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 39, name: "Fish Biryani", category: "Biryani", price: 449, rating: 4.5, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" },
    { id: 40, name: "Prawn Biryani", category: "Biryani", price: 499, rating: 4.7, img: "https://images.unsplash.com/photo-1596797038583-bc81878cb933?auto=format&fit=crop&w=400&q=80" },
    { id: 41, name: "Dum Biryani", category: "Biryani", price: 319, rating: 4.8, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80" },
    { id: 42, name: "Keema Biryani", category: "Biryani", price: 379, rating: 4.8, img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=400&q=80" },
    { id: 43, name: "Mushroom Biryani", category: "Biryani", price: 259, rating: 4.4, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 44, name: "Tandoori Chicken Biryani", category: "Biryani", price: 389, rating: 4.9, img: "https://images.unsplash.com/photo-1596797038583-bc81878cb933?auto=format&fit=crop&w=400&q=80" },
    { id: 45, name: "Special Family Biryani", category: "Biryani", price: 899, rating: 4.9, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80" },

    // 🎂 Cake
    { id: 46, name: "Chocolate Cake", category: "Cake", price: 499, rating: 4.9, img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80" },
    { id: 47, name: "Vanilla Cake", category: "Cake", price: 399, rating: 4.5, img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80" },
    { id: 48, name: "Red Velvet Cake", category: "Cake", price: 549, rating: 4.8, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
    { id: 49, name: "Black Forest Cake", category: "Cake", price: 459, rating: 4.7, img: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?auto=format&fit=crop&w=400&q=80" },
    { id: 50, name: "Butterscotch Cake", category: "Cake", price: 429, rating: 4.6, img: "https://images.unsplash.com/photo-1574484284002-982da3747890?auto=format&fit=crop&w=400&q=80" },
    { id: 51, name: "Pineapple Cake", category: "Cake", price: 379, rating: 4.5, img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80" },
    { id: 52, name: "Fruit Cake", category: "Cake", price: 449, rating: 4.4, img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80" },
    { id: 53, name: "Truffle Cake", category: "Cake", price: 599, rating: 4.9, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { id: 54, name: "Cheesecake", category: "Cake", price: 649, rating: 4.9, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" },
    { id: 55, name: "Coffee Cake", category: "Cake", price: 479, rating: 4.6, img: "https://images.unsplash.com/photo-1574484284002-982da3747890?auto=format&fit=crop&w=600&q=80" },
    { id: 56, name: "Mango Cake", category: "Cake", price: 429, rating: 4.7, img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80" },
    { id: 57, name: "Strawberry Cake", category: "Cake", price: 449, rating: 4.8, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" },
    { id: 58, name: "KitKat Cake", category: "Cake", price: 699, rating: 4.9, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80" },
    { id: 59, name: "Oreo Cake", category: "Cake", price: 649, rating: 4.9, img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80" },
    { id: 60, name: "Ice Cream Cake", category: "Cake", price: 799, rating: 4.9, img: "https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=600&q=80" },

    // 🍜 Chinese
    { id: 61, name: "Hakka Noodles", category: "Chinese", price: 179, rating: 4.5, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
    { id: 62, name: "Schezwan Noodles", category: "Chinese", price: 199, rating: 4.6, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80" },
    { id: 63, name: "Fried Rice", category: "Chinese", price: 159, rating: 4.4, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 64, name: "Manchurian", category: "Chinese", price: 189, rating: 4.6, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
    { id: 65, name: "Chilli Chicken", category: "Chinese", price: 299, rating: 4.8, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80" },
    { id: 66, name: "Spring Rolls", category: "Chinese", price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 67, name: "Honey Chilli Potato", category: "Chinese", price: 169, rating: 4.7, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
    { id: 68, name: "Chowmein", category: "Chinese", price: 129, rating: 4.3, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80" },
    { id: 69, name: "Dragon Chicken", category: "Chinese", price: 349, rating: 4.8, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 70, name: "Garlic Noodles", category: "Chinese", price: 189, rating: 4.5, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
    { id: 71, name: "Hot & Sour Soup", category: "Chinese", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80" },
    { id: 72, name: "Sweet Corn Soup", category: "Chinese", price: 99, rating: 4.5, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 73, name: "Dim Sum", category: "Chinese", price: 249, rating: 4.9, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
    { id: 74, name: "Paneer Chilli", category: "Chinese", price: 229, rating: 4.6, img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80" },
    { id: 75, name: "Singapore Noodles", category: "Chinese", price: 219, rating: 4.7, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },

    // 🌯 Rolls
    { id: 76, name: "Mango Lassi", category: "Beverages", price: 89, rating: 4.9, img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80" },
    { id: 77, name: "Egg Roll", category: "Rolls", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
    { id: 78, name: "Paneer Roll", category: "Rolls", price: 139, rating: 4.5, img: "https://images.unsplash.com/photo-1601050638917-3f364a78df6a?auto=format&fit=crop&w=600&q=80" },
    { id: 79, name: "Veg Roll", category: "Rolls", price: 89, rating: 4.2, img: "https://images.unsplash.com/photo-1547050605-2f630ef33421?auto=format&fit=crop&w=600&q=80" },
    { id: 80, name: "Double Egg Roll", category: "Rolls", price: 119, rating: 4.5, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
    { id: 81, name: "Chicken Egg Roll", category: "Rolls", price: 169, rating: 4.7, img: "https://images.unsplash.com/photo-1601050638917-3f364a78df6a?auto=format&fit=crop&w=600&q=80" },
    { id: 82, name: "Kathi Roll", category: "Rolls", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1626776876729-bab4fe29a21b?auto=format&fit=crop&w=600&q=80" },
    { id: 83, name: "Cheese Roll", category: "Rolls", price: 149, rating: 4.5, img: "https://images.unsplash.com/photo-1547050605-2f630ef33421?auto=format&fit=crop&w=600&q=80" },
    { id: 84, name: "Mushroom Roll", category: "Rolls", price: 139, rating: 4.4, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
    { id: 85, name: "Tandoori Roll", category: "Rolls", price: 179, rating: 4.8, img: "https://images.unsplash.com/photo-1601050638917-3f364a78df6a?auto=format&fit=crop&w=600&q=80" },
    { id: 86, name: "Shawarma Roll", category: "Rolls", price: 199, rating: 4.9, img: "https://images.unsplash.com/photo-1626776876729-bab4fe29a21b?auto=format&fit=crop&w=600&q=80" },
    { id: 87, name: "Frankie Roll", category: "Rolls", price: 119, rating: 4.3, img: "https://images.unsplash.com/photo-1547050605-2f630ef33421?auto=format&fit=crop&w=600&q=80" },
    { id: 88, name: "Aloo Roll", category: "Rolls", price: 79, rating: 4.1, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
    { id: 89, name: "Spicy Chicken Roll", category: "Rolls", price: 159, rating: 4.6, img: "https://images.unsplash.com/photo-1601050638917-3f364a78df6a?auto=format&fit=crop&w=600&q=80" },
    { id: 90, name: "Butter Chicken Roll", category: "Rolls", price: 189, rating: 4.8, img: "https://images.unsplash.com/photo-1626776876729-bab4fe29a21b?auto=format&fit=crop&w=600&q=80" },

    // 🥞 South Indian
    { id: 91, name: "Plain Dosa", category: "South-Indian", price: 89, rating: 4.3, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 92, name: "Masala Dosa", category: "South-Indian", price: 119, rating: 4.7, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 93, name: "Idli (2pcs)", category: "South-Indian", price: 69, rating: 4.5, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 94, name: "Vada (2pcs)", category: "South-Indian", price: 79, rating: 4.4, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 95, name: "Uttapam", category: "South-Indian", price: 109, rating: 4.5, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 96, name: "Rava Dosa", category: "South-Indian", price: 139, rating: 4.6, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 97, name: "Paper Dosa", category: "South-Indian", price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 98, name: "Set Dosa", category: "South-Indian", price: 99, rating: 4.3, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 99, name: "Pongal", category: "South-Indian", price: 89, rating: 4.5, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 100, name: "Upma", category: "South-Indian", price: 79, rating: 4.2, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 101, name: "Medu Vada", category: "South-Indian", price: 89, rating: 4.6, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 102, name: "Mysore Dosa", category: "South-Indian", price: 149, rating: 4.8, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 103, name: "Onion Uttapam", category: "South-Indian", price: 129, rating: 4.5, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 104, name: "Appam", category: "South-Indian", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },
    { id: 105, name: "Pesarattu", category: "South-Indian", price: 119, rating: 4.5, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80" },

    // 🍝 Pasta
    { id: 106, name: "White Sauce Pasta", category: "Pasta", price: 249, rating: 4.7, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80" },
    { id: 107, name: "Red Sauce Pasta", category: "Pasta", price: 229, rating: 4.6, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" },
    { id: 108, name: "Pink Sauce Pasta", category: "Pasta", price: 259, rating: 4.8, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 109, name: "Alfredo Pasta", category: "Pasta", price: 279, rating: 4.9, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 110, name: "Arrabbiata Pasta", category: "Pasta", price: 239, rating: 4.5, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 111, name: "Mac & Cheese", category: "Pasta", price: 199, rating: 4.8, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 112, name: "Penne Pasta", category: "Pasta", price: 219, rating: 4.4, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 113, name: "Spaghetti", category: "Pasta", price: 249, rating: 4.6, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 114, name: "Chicken Pasta", category: "Pasta", price: 299, rating: 4.8, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 115, name: "Veg Pasta", category: "Pasta", price: 189, rating: 4.3, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 116, name: "Mushroom Pasta", category: "Pasta", price: 239, rating: 4.5, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 117, name: "Cheese Pasta", category: "Pasta", price: 219, rating: 4.4, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 118, name: "Garlic Pasta", category: "Pasta", price: 199, rating: 4.4, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },
    { id: 119, name: "Pesto Pasta", category: "Pasta", price: 289, rating: 4.9, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5855?auto=format&fit=crop&w=400&q=80" },
    { id: 120, name: "Baked Pasta", category: "Pasta", price: 319, rating: 4.8, img: "https://images.unsplash.com/photo-1612450800052-758c07174620?auto=format&fit=crop&w=400&q=80" },

    // 🍣 Sushi
    { id: 121, name: "Veg Sushi", category: "Sushi", price: 399, rating: 4.5, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 122, name: "Chicken Sushi", category: "Sushi", price: 449, rating: 4.6, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 123, name: "Salmon Sushi", category: "Sushi", price: 699, rating: 4.9, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 124, name: "Tuna Sushi", category: "Sushi", price: 649, rating: 4.8, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 125, name: "California Roll", category: "Sushi", price: 549, rating: 4.7, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 126, name: "Dragon Roll", category: "Sushi", price: 799, rating: 4.9, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 127, name: "Tempura Roll", category: "Sushi", price: 599, rating: 4.6, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 128, name: "Avocado Roll", category: "Sushi", price: 349, rating: 4.5, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 129, name: "Cucumber Roll", category: "Sushi", price: 299, rating: 4.3, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 130, name: "Spicy Tuna Roll", category: "Sushi", price: 679, rating: 4.8, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 131, name: "Ebi Sushi", category: "Sushi", price: 549, rating: 4.7, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 132, name: "Nigiri Sushi", category: "Sushi", price: 499, rating: 4.8, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 133, name: "Sashimi", category: "Sushi", price: 899, rating: 4.9, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
    { id: 134, name: "Maki Roll", category: "Sushi", price: 449, rating: 4.5, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" },
    { id: 135, name: "Philadelphia Roll", category: "Sushi", price: 629, rating: 4.8, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },

    // 🥗 Salads
    { id: 136, name: "Greek Salad", category: "Salads", price: 299, rating: 4.6, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 137, name: "Caesar Salad", category: "Salads", price: 349, rating: 4.8, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 138, name: "Fruit Salad", category: "Salads", price: 199, rating: 4.5, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 139, name: "Veg Salad", category: "Salads", price: 179, rating: 4.3, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 140, name: "Chicken Salad", category: "Salads", price: 329, rating: 4.7, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 141, name: "Sprout Salad", category: "Salads", price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 142, name: "Paneer Salad", category: "Salads", price: 279, rating: 4.6, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 143, name: "Corn Salad", category: "Salads", price: 189, rating: 4.2, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 144, name: "Pasta Salad", category: "Salads", price: 259, rating: 4.5, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 145, name: "Egg Salad", category: "Salads", price: 219, rating: 4.4, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 146, name: "Quinoa Salad", category: "Salads", price: 399, rating: 4.9, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 147, name: "Avocado Salad", category: "Salads", price: 449, rating: 4.8, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 148, name: "Cucumber Salad", category: "Salads", price: 129, rating: 4.1, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 149, name: "Coleslaw", category: "Salads", price: 99, rating: 4.2, img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
    { id: 150, name: "Russian Salad", category: "Salads", price: 259, rating: 4.5, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    { id: 151, name: "Gulab Jamun", category: "Desserts", price: 79, rating: 4.9, img: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=600&q=80" },
    { id: 152, name: "Rasgulla", category: "Desserts", price: 69, rating: 4.7, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 153, name: "Brownie", category: "Desserts", price: 129, rating: 4.8, img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80" },
    { id: 154, name: "Ice Cream Sundae", category: "Desserts", price: 179, rating: 4.9, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80" },
    { id: 155, name: "Jalebi", category: "Desserts", price: 59, rating: 4.8, img: "https://images.unsplash.com/photo-1549466654-206e93234919?auto=format&fit=crop&w=400&q=80" },
    { id: 156, name: "Kheer", category: "Desserts", price: 99, rating: 4.6, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 157, name: "Rabri", category: "Desserts", price: 119, rating: 4.7, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 158, name: "Halwa", category: "Desserts", price: 89, rating: 4.5, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 159, name: "Chocolate Mousse", category: "Desserts", price: 149, rating: 4.8, img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80" },
    { id: 160, name: "Tiramisu", category: "Desserts", price: 199, rating: 4.9, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80" },
    { id: 161, name: "Donuts", category: "Desserts", price: 149, rating: 4.7, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80" },
    { id: 162, name: "Cupcakes", category: "Desserts", price: 99, rating: 4.6, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80" },
    { id: 163, name: "Ladoo (4pcs)", category: "Desserts", price: 79, rating: 4.8, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 164, name: "Barfi (4pcs)", category: "Desserts", price: 99, rating: 4.7, img: "https://images.unsplash.com/photo-1589113734822-48a60965d144?auto=format&fit=crop&w=400&q=80" },
    { id: 165, name: "Pudding", category: "Desserts", price: 129, rating: 4.5, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80" },

    // 🥤 Beverages
    { id: 166, name: "Cold Coffee", category: "Beverages", price: 129, rating: 4.7, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 167, name: "Hot Coffee", category: "Beverages", price: 99, rating: 4.6, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 168, name: "Masala Tea", category: "Beverages", price: 49, rating: 4.9, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 169, name: "Green Tea", category: "Beverages", price: 59, rating: 4.5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 170, name: "Mango Milkshake", category: "Beverages", price: 149, rating: 4.8, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 171, name: "Berry Smoothie", category: "Beverages", price: 179, rating: 4.7, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 172, name: "Fresh Orange Juice", category: "Beverages", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 173, name: "Soft Drinks", category: "Beverages", price: 49, rating: 4.4, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 174, name: "Lemonade", category: "Beverages", price: 69, rating: 4.5, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 175, name: "Iced Tea", category: "Beverages", price: 89, rating: 4.4, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 176, name: "Virgin Mojito", category: "Beverages", price: 119, rating: 4.8, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 177, name: "Sweet Lassi", category: "Beverages", price: 79, rating: 4.7, img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=600&q=80" },
    { id: 178, name: "Coconut Water", category: "Beverages", price: 59, rating: 4.9, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 179, name: "Energy Drink", category: "Beverages", price: 149, rating: 4.3, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },
    { id: 180, name: "Fruit Mocktail", category: "Beverages", price: 159, rating: 4.6, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80" },

    // 🍟 Fries
    { id: 181, name: "Classic Fries", category: "Fries", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 182, name: "Peri Peri Fries", category: "Fries", price: 129, rating: 4.7, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 183, name: "Cheese Fries", category: "Fries", price: 159, rating: 4.8, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 184, name: "Loaded Fries", category: "Fries", price: 199, rating: 4.9, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 185, name: "Curly Fries", category: "Fries", price: 149, rating: 4.6, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 186, name: "Waffle Fries", category: "Fries", price: 159, rating: 4.5, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 187, name: "Masala Fries", category: "Fries", price: 119, rating: 4.4, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 188, name: "Garlic Fries", category: "Fries", price: 139, rating: 4.5, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 189, name: "BBQ Fries", category: "Fries", price: 149, rating: 4.6, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 190, name: "Chicken Loaded Fries", category: "Fries", price: 249, rating: 4.9, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 191, name: "Paneer Fries", category: "Fries", price: 179, rating: 4.6, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 192, name: "Sweet Potato Fries", category: "Fries", price: 189, rating: 4.7, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 193, name: "Spicy Fries", category: "Fries", price: 109, rating: 4.3, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 194, name: "Butter Fries", category: "Fries", price: 129, rating: 4.4, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 195, name: "Crispy Fries", category: "Fries", price: 119, rating: 4.5, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },

    // 🥪 Sandwich
    { id: 196, name: "Veg Sandwich", category: "Sandwich", price: 99, rating: 4.4, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 197, name: "Grilled Sandwich", category: "Sandwich", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 198, name: "Cheese Sandwich", category: "Sandwich", price: 149, rating: 4.7, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 199, name: "Chicken Sandwich", category: "Sandwich", price: 189, rating: 4.8, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 200, name: "Club Sandwich", category: "Sandwich", price: 249, rating: 4.9, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 201, name: "Egg Sandwich", category: "Sandwich", price: 119, rating: 4.3, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 202, name: "Paneer Sandwich", category: "Sandwich", price: 159, rating: 4.6, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 203, name: "Corn Sandwich", category: "Sandwich", price: 139, rating: 4.4, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 204, name: "Toast Sandwich", category: "Sandwich", price: 89, rating: 4.1, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 205, name: "Mayo Sandwich", category: "Sandwich", price: 109, rating: 4.3, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 206, name: "Chocolate Sandwich", category: "Sandwich", price: 149, rating: 4.5, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 207, name: "BBQ Sandwich", category: "Sandwich", price: 199, rating: 4.7, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 208, name: "Mushroom Sandwich", category: "Sandwich", price: 169, rating: 4.5, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 209, name: "Subway Style Sandwich", category: "Sandwich", price: 279, rating: 4.9, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
    { id: 210, name: "Aloo Sandwich", category: "Sandwich", price: 79, rating: 4.2, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },

    // 🥟 Momos
    { id: 211, name: "Veg Momos", category: "Momos", price: 99, rating: 4.6, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 212, name: "Chicken Momos", category: "Momos", price: 129, rating: 4.8, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 213, name: "Fried Momos", category: "Momos", price: 139, rating: 4.7, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 214, name: "Tandoori Momos", category: "Momos", price: 169, rating: 4.9, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 215, name: "Paneer Momos", category: "Momos", price: 149, rating: 4.6, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 216, name: "Cheese Momos", category: "Momos", price: 179, rating: 4.8, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 217, name: "Chocolate Momos", category: "Momos", price: 149, rating: 4.4, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 218, name: "Mushroom Momos", category: "Momos", price: 149, rating: 4.5, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 219, name: "Corn Momos", category: "Momos", price: 129, rating: 4.5, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 220, name: "Kurkure Momos", category: "Momos", price: 159, rating: 4.7, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 221, name: "Chilli Momos", category: "Momos", price: 169, rating: 4.8, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 222, name: "Steam Momos", category: "Momos", price: 99, rating: 4.5, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 223, name: "Schezwan Momos", category: "Momos", price: 149, rating: 4.7, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 224, name: "Afghani Momos", category: "Momos", price: 189, rating: 4.9, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    { id: 225, name: "Butter Momos", category: "Momos", price: 139, rating: 4.6, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80" },
    // 🍗 Tandoori
    { id: 226, name: "Tandoori Chicken", category: "Tandoori", price: 299, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 227, name: "Chicken Tikka", category: "Tandoori", price: 249, rating: 4.8, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 228, name: "Paneer Tikka", category: "Tandoori", price: 219, rating: 4.7, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 229, name: "Fish Tikka", category: "Tandoori", price: 349, rating: 4.8, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 230, name: "Seekh Kebab", category: "Tandoori", price: 279, rating: 4.8, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 231, name: "Malai Tikka", category: "Tandoori", price: 269, rating: 4.7, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 232, name: "Afghani Chicken", category: "Tandoori", price: 329, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 233, name: "Tandoori Roti", category: "Tandoori", price: 29, rating: 4.6, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 234, name: "Butter Naan", category: "Tandoori", price: 49, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 235, name: "Garlic Naan", category: "Tandoori", price: 59, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 236, name: "Tandoori Mushroom", category: "Tandoori", price: 199, rating: 4.5, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 237, name: "Tandoori Prawns", category: "Tandoori", price: 499, rating: 4.8, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 238, name: "Chicken Wings", category: "Tandoori", price: 229, rating: 4.7, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 239, name: "Stuffed Tandoori Aloo", category: "Tandoori", price: 189, rating: 4.4, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
    { id: 240, name: "Mixed Grill", category: "Tandoori", price: 599, rating: 4.9, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },

    // 🍲 North Indian
    { id: 241, name: "Butter Chicken", category: "North-Indian", price: 349, rating: 4.9, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
    { id: 242, name: "Dal Makhani", category: "North-Indian", price: 279, rating: 4.8, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80" },
    { id: 243, name: "Paneer Butter Masala", category: "North-Indian", price: 299, rating: 4.7, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80" },
    { id: 244, name: "Shahi Paneer", category: "North-Indian", price: 319, rating: 4.8, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80" },
    { id: 245, name: "Chole Bhature", category: "North-Indian", price: 149, rating: 4.9, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
    { id: 246, name: "Rajma Chawal", category: "North-Indian", price: 179, rating: 4.7, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80" },
    { id: 247, name: "Palak Paneer", category: "North-Indian", price: 289, rating: 4.6, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80" },
    { id: 248, name: "Kadai Chicken", category: "North-Indian", price: 329, rating: 4.8, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
    { id: 249, name: "Aloo Gobi", category: "North-Indian", price: 199, rating: 4.4, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80" },
    { id: 250, name: "Mix Veg Curry", category: "North-Indian", price: 229, rating: 4.5, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80" },
    { id: 251, name: "Chicken Curry", category: "North-Indian", price: 289, rating: 4.7, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
    { id: 252, name: "Mutton Curry", category: "North-Indian", price: 449, rating: 4.9, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80" },
    { id: 253, name: "Plain Naan", category: "North-Indian", price: 39, rating: 4.5, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
    { id: 254, name: "Tandoori Roti", category: "North-Indian", price: 25, rating: 4.6, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80" },
    { id: 255, name: "Jeera Rice", category: "North-Indian", price: 129, rating: 4.5, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80" },

    // 🍛 Pav Bhaji
    { id: 256, name: "Belgian Chocolate Ice Cream", category: "Ice-Cream", price: 159, rating: 4.9, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80" },
    { id: 257, name: "Mango Sundae", category: "Ice-Cream", price: 149, rating: 4.9, img: "https://images.unsplash.com/photo-1549128247-37e905ebdb3f?auto=format&fit=crop&w=400&q=80" },
    { id: 258, name: "Oreo Blast Ice Cream", category: "Ice-Cream", price: 179, rating: 4.9, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 259, name: "Butterscotch Delight", category: "Ice-Cream", price: 169, rating: 4.7, img: "https://images.unsplash.com/photo-1549128247-37e905ebdb3f?auto=format&fit=crop&w=400&q=80" },
    { id: 260, name: "Cookie Dough Ice Cream", category: "Ice-Cream", price: 129, rating: 4.5, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 261, name: "Mint Chocolate Chip", category: "Ice-Cream", price: 159, rating: 4.8, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 262, name: "Tandoori Pav Bhaji", category: "Pav-Bhaji", price: 189, rating: 4.9, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 263, name: "Khada Pav Bhaji", category: "Pav-Bhaji", price: 149, rating: 4.6, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 264, name: "Extra Butter Pav Bhaji", category: "Pav-Bhaji", price: 169, rating: 4.9, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 265, name: "Spicy Pav Bhaji", category: "Pav-Bhaji", price: 139, rating: 4.7, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 266, name: "Mushroom Pav Bhaji", category: "Pav-Bhaji", price: 179, rating: 4.6, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 267, name: "Corn Pav Bhaji", category: "Pav-Bhaji", price: 159, rating: 4.6, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 268, name: "Fusion Pav Bhaji", category: "Pav-Bhaji", price: 199, rating: 4.7, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 269, name: "Chocolate Pav Bhaji", category: "Pav-Bhaji", price: 149, rating: 3.9, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },
    { id: 270, name: "Street Style Pav Bhaji", category: "Pav-Bhaji", price: 119, rating: 4.8, img: "https://images.unsplash.com/photo-1626132646529-5ae866d98fd3?auto=format&fit=crop&w=400&q=80" },

    // 🍦 Ice Cream
    { id: 271, name: "Vanilla", category: "Ice-Cream", price: 79, rating: 4.5, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80" },
    { id: 272, name: "Chocolate", category: "Ice-Cream", price: 89, rating: 4.7, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80" },
    { id: 273, name: "Strawberry", category: "Ice-Cream", price: 89, rating: 4.6, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80" },
    { id: 274, name: "Butterscotch", category: "Ice-Cream", price: 99, rating: 4.8, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 275, name: "Mango", category: "Ice-Cream", price: 99, rating: 4.7, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 276, name: "Black Currant", category: "Ice-Cream", price: 119, rating: 4.8, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 277, name: "Pistachio", category: "Ice-Cream", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 278, name: "Kulfi", category: "Ice-Cream", price: 69, rating: 4.9, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 279, name: "Sundae", category: "Ice-Cream", price: 179, rating: 4.9, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 280, name: "Cone Ice Cream", category: "Ice-Cream", price: 59, rating: 4.4, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 281, name: "Softy", category: "Ice-Cream", price: 49, rating: 4.5, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 282, name: "Cassata", category: "Ice-Cream", price: 149, rating: 4.7, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 283, name: "Choco Chips", category: "Ice-Cream", price: 109, rating: 4.8, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 284, name: "Cookies & Cream", category: "Ice-Cream", price: 139, rating: 4.9, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },
    { id: 285, name: "Fruit Ice Cream", category: "Ice-Cream", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80" },

    // 🥗 Healthy
    { id: 286, name: "Grilled Chicken", category: "Healthy", price: 349, rating: 4.9, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 287, name: "Veg Bowl", category: "Healthy", price: 299, rating: 4.6, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 288, name: "Quinoa Bowl", category: "Healthy", price: 399, rating: 4.8, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 289, name: "Oats", category: "Healthy", price: 149, rating: 4.5, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 290, name: "Smoothie Bowl", category: "Healthy", price: 329, rating: 4.7, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 291, name: "Fruit Bowl", category: "Healthy", price: 199, rating: 4.8, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 292, name: "Sprouts", category: "Healthy", price: 129, rating: 4.6, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 293, name: "Salad Bowl", category: "Healthy", price: 279, rating: 4.7, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 294, name: "Brown Rice Meal", category: "Healthy", price: 249, rating: 4.5, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 295, name: "Grilled Fish", category: "Healthy", price: 499, rating: 4.9, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 296, name: "Boiled Eggs (4pcs)", category: "Healthy", price: 99, rating: 4.8, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 297, name: "Protein Shake", category: "Healthy", price: 199, rating: 4.7, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 298, name: "Avocado Toast", category: "Healthy", price: 299, rating: 4.8, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 299, name: "Multigrain Sandwich", category: "Healthy", price: 179, rating: 4.5, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" },
    { id: 300, name: "Detox Juice", category: "Healthy", price: 149, rating: 4.8, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" }
];

// --- GLOBAL UTILITIES & DATA ---
const translations = {
    en: {
        gold_banner: "⭐ Join <strong>QuickBite Gold</strong> for ₹0 Delivery Fee & exclusive discounts!",
        join_now: "Join Now",
        delivery: "Delivery",
        dineout: "Dineout",
        search_placeholder: "Search for food, restaurants...",
        fresh_picks: "Fresh Picks: Top Dishes for You",
        reserve_title: "Reserve your table for an <br> <span>Atmospheric Experience</span>",
        reserve_subtitle: "Curated collections of the best restaurants, cafes, and bars",
        language: "Language",
        lang_desc: "Choose your preferred language",
        orders_nav: "Orders",
        addresses_nav: "Addresses",
        payments_nav: "Payments",
        support_nav: "Support",
        settings_nav: "Settings",
        logout: "Log Out"
    },
    hi: {
        gold_banner: "⭐ ₹0 डिलीवरी शुल्क और विशेष छूट के लिए <strong>QuickBite गोल्ड</strong> जॉइन करें!",
        join_now: "अभी जुड़ें",
        delivery: "डिलीवरी",
        dineout: "डाइनआउट",
        search_placeholder: "खाना, रेस्टोरेंट खोजें...",
        fresh_picks: "ताज़ा चयन: आपके लिए पसंदीदा व्यंजन",
        reserve_title: "एक शानदार अनुभव के लिए <br> <span>अपनी टेबल रिजर्व करें</span>",
        reserve_subtitle: "सर्वोत्तम रेस्टोरेंट, कैफे और बार का क्यूरेटेड संग्रह",
        language: "भाषा",
        lang_desc: "अपनी पसंदीदा भाषा चुनें",
        orders_nav: "मेरे ऑर्डर",
        addresses_nav: "पते",
        payments_nav: "भुगतान",
        support_nav: "सहायता",
        settings_nav: "सेटिंग्स",
        logout: "लॉग आउट"
    }
};

window.currentLang = localStorage.getItem('qb_lang') || 'en';

window.updateLanguage = function(lang) {
    window.currentLang = lang;
    localStorage.setItem('qb_lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-hold]').forEach(el => {
        const key = el.getAttribute('data-i18n-hold');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
};

const DataStore = {
    getUsers: () => JSON.parse(localStorage.getItem('qb_users')) || [],
    saveUser: (user) => {
        const users = DataStore.getUsers();
        users.push(user);
        localStorage.setItem('qb_users', JSON.stringify(users));
    },
    getCurrentUser: () => JSON.parse(localStorage.getItem('qb_session')) || null,
    setCurrentUser: (user) => localStorage.setItem('qb_session', JSON.stringify(user)),
    logout: () => localStorage.removeItem('qb_session'),
    
    getAddresses: (userId) => JSON.parse(localStorage.getItem(`qb_addr_${userId}`)) || [
        { id: 1, type: 'Home', full: '123, Green Park, South Delhi, 110016', default: true },
        { id: 2, type: 'Work', full: 'Building 4, Tech Enclave, Whitefield, Bangalore, 560066', default: false }
    ],
    saveAddress: (userId, address) => {
        const addrs = DataStore.getAddresses(userId);
        addrs.push(address);
        localStorage.setItem(`qb_addr_${userId}`, JSON.stringify(addrs));
    },
    deleteAddress: (userId, addrId) => {
        let addrs = DataStore.getAddresses(userId);
        addrs = addrs.filter(a => a.id.toString() !== addrId.toString());
        localStorage.setItem(`qb_addr_${userId}`, JSON.stringify(addrs));
    },
    updateAddress: (userId, updatedAddr) => {
        const addrs = DataStore.getAddresses(userId);
        const idx = addrs.findIndex(a => a.id.toString() === updatedAddr.id.toString());
        if (idx !== -1) {
            addrs[idx] = updatedAddr;
            localStorage.setItem(`qb_addr_${userId}`, JSON.stringify(addrs));
        }
    },
    updateUser: (updatedUser) => {
        const users = DataStore.getUsers();
        const index = users.findIndex(u => u.email === updatedUser.email);
        if (index !== -1) {
            users[index] = updatedUser;
            localStorage.setItem('qb_users', JSON.stringify(users));
            DataStore.setCurrentUser(updatedUser);
        }
    },
    
    getPayments: (userId) => JSON.parse(localStorage.getItem(`qb_pay_${userId}`)) || [
        { id: 'p1', type: 'Card', provider: 'Visa', last4: '4455', expiry: '12/28', default: true },
        { id: 'p2', type: 'UPI', upiId: 'john@okaxis', provider: 'UPI', default: false }
    ],
    savePayment: (userId, method) => {
        const methods = DataStore.getPayments(userId);
        methods.push(method);
        localStorage.setItem(`qb_pay_${userId}`, JSON.stringify(methods));
    },
    deletePayment: (userId, payId) => {
        let methods = DataStore.getPayments(userId);
        methods = methods.filter(p => p.id !== payId);
        localStorage.setItem(`qb_pay_${userId}`, JSON.stringify(methods));
    },
    getWallet: (userId) => parseFloat(localStorage.getItem(`qb_wallet_${userId}`)) || 124.50,
    updateWallet: (userId, amount) => {
        localStorage.setItem(`qb_wallet_${userId}`, next.toFixed(2));
        return next;
    },
    getCoins: (userId) => parseInt(localStorage.getItem(`qb_coins_${userId}`)) || 250,
    updateCoins: (userId, amount) => {
        const next = DataStore.getCoins(userId) + amount;
        localStorage.setItem(`qb_coins_${userId}`, next);
        return next;
    },
    
    getComplaints: (userId) => JSON.parse(localStorage.getItem(`qb_tickets_${userId}`)) || [
        { id: 'TC-9921', issue: 'Missing item in order', status: 'Pending', date: 'Oct 24, 2026' }
    ],
    saveComplaint: (userId, ticket) => {
        const tickets = DataStore.getComplaints(userId);
        tickets.unshift(ticket);
        localStorage.setItem(`qb_tickets_${userId}`, JSON.stringify(tickets));
    }
};

const updateAuthVisuals = () => {
    const user = DataStore.getCurrentUser();
    const signinBtn = document.getElementById('landing-signin-btn');
    const profBtn = document.getElementById('profile-btn');

    if (user) {
        if (signinBtn) signinBtn.innerHTML = `<i class="fas fa-user-circle"></i> ${user.name.split(' ')[0]}`;
        if (profBtn) profBtn.innerHTML = `<span style="font-size: 0.8rem; font-weight: 800; color: var(--primary-color);">${user.name.split(' ')[0]}</span>`;
    } else {
        if (signinBtn) signinBtn.innerText = 'Sign in';
        if (profBtn) profBtn.innerHTML = '<i class="fas fa-user" style="color: var(--text-muted);"></i>';
    }
};

window.updateAuthVisuals = updateAuthVisuals;

// Global Error Tracking for UX
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Critical UX Error:", message, "at", lineno);
    if (window.showToast) window.showToast("Oops! Something went wrong. (" + message.split(':')[0] + ")", true);
    return false;
};

// --- State Variables ---
let cart = [];
try {
    const rawCart = localStorage.getItem('quickbite_cart');
    if (rawCart) {
        cart = JSON.parse(rawCart);
        if (cart.length > 0 && !cart[0].customization) {
            cart = [];
            localStorage.removeItem('quickbite_cart');
        }
    }
} catch (e) {
    cart = [];
}
let cartRestaurantId = localStorage.getItem('quickbite_restaurant_id') || null;
let searchQuery = '';
let activeFilter = 'all';
let currentAppMode = 'delivery';
let activeDineoutFilter = 'Trending';
let globalSearchQuery = '';
let currentItemToCustomize = null;
let user = JSON.parse(localStorage.getItem('quickbite_user')) || null;
let orderHistory = JSON.parse(localStorage.getItem('quickbite_orders')) || [];
let bookingHistory = JSON.parse(localStorage.getItem('quickbite_bookings')) || [];

// --- PORTAL & NAVIGATION ---
window.updateAuthVisuals();

window.enterApp = function(mode = 'delivery') {
    const landing = document.getElementById('landing-page');
    const app = document.getElementById('main-app');
    if (!landing || !app) return;

    landing.style.display = 'none';
    app.style.display = 'block';
    
    updateAuthVisuals();
    switchAppMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.exitApp = function() {
    const landing = document.getElementById('landing-page');
    const app = document.getElementById('main-app');
    if (!landing || !app) return;

    landing.style.display = 'block';
    app.style.display = 'none';
    updateAuthVisuals();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

console.log("QuickBite System Initializing...");


function switchAppMode(mode) {
    currentAppMode = mode;
    // UI Updates
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    document.querySelectorAll('.mode-content').forEach(section => {
        section.classList.toggle('active', section.id === `${mode}-section`);
    });

    if (mode === 'delivery') renderFoodMarketplace();
    else renderDineoutRestaurants();
}

// Food Marketplace Rendering (30 diverse items)
function renderFoodMarketplace() {
    const grid = document.getElementById('food-marketplace-grid');
    if (!grid) return;

    // Pick a diverse set of 30 items from different categories
    let diverseItems = [];
    const categories = [...new Set(menuItems.map(i => i.category || 'Food'))];
    
    // Filter by search query if exists
    let filteredItems = menuItems || [];
    if (globalSearchQuery) {
        const query = globalSearchQuery.toLowerCase();
        filteredItems = menuItems.filter(item => 
            (item.name && item.name.toLowerCase().includes(query)) ||
            (item.category && item.category.toLowerCase().includes(query))
        );
    }

    let catIndex = 0;
    while (diverseItems.length < 30 && diverseItems.length < filteredItems.length) {
        const cat = categories[catIndex % categories.length];
        const item = filteredItems.find(i => i.category === cat && !diverseItems.includes(i));
        if (item) diverseItems.push(item);
        else {
            const anyItem = filteredItems.find(i => !diverseItems.includes(i));
            if (anyItem) diverseItems.push(anyItem);
            else break;
        }
        catIndex++;
    }

    const mockRestaurants = [
        "The Burger King", "Pizza Hut", "Biryani By Kilo", "Empire Restaurant", 
        "Taco Bell", "Subway", "Wow! Momo", "Starbucks", "Domino's Pizza", "Sushi House"
    ];

    if (diverseItems.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png" style="width: 200px; opacity: 0.5;">
                <h3 style="margin-top: 1.5rem; color: #999;">No dishes found matching "${globalSearchQuery}"</h3>
            </div>
        `;
        return;
    }

    grid.innerHTML = diverseItems.map((item, index) => {
        if (!item) return '';
        const restName = mockRestaurants[index % mockRestaurants.length] || "QuickBite Partner";
        const restId = (index % mockRestaurants.length) + 100;
        
        // Escape single quotes for HTML attributes
        const safeRestName = restName.replace(/'/g, "\\'");
        
        // Check if item is already in cart
        const cartItem = cart?.find(i => i?.id === item.id);
        
        return `
            <div class="rest-card" onclick="openMenu('${safeRestName}')">
                <div style="position: relative;">
                    <img src="${item.img}" alt="${item.name}">
                    <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; backdrop-filter: blur(8px);">
                        <i class="fas fa-motorcycle"></i> 25 MIN
                    </div>
                </div>
                <div class="rest-info">
                    <div class="rest-header">
                        <span class="rest-name">${item.name}</span>
                        <span class="rest-rating" style="background: #23945d;">
                            ${item.rating} <i class="fas fa-star" style="font-size: 0.6rem;"></i>
                        </span>
                    </div>
                    <div class="rest-meta">
                        <span style="font-weight: 800; color: #333; font-size: 1.2rem;">₹${item.price}</span>
                        <span style="margin: 0 8px; color: #ccc;">•</span>
                        <span>${item.category}</span>
                    </div>
                    <div style="font-size: 0.8rem; color: #888; margin-top: 10px; display: flex; align-items: center; gap: 8px; padding-top: 10px; border-top: 1px dashed #eee;">
                        <i class="fas fa-hotel" style="color: #fc8019;"></i>
                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${restName}</span>
                    </div>

                    <div class="card-action-box" style="margin-top: 1.2rem;">
                        ${cartItem ? `
                            <div class="qty-scroller">
                                <button class="qty-btn" onclick="event.stopPropagation(); changeQty(${item.id}, -1)">-</button>
                                <span class="qty-val">${cartItem.qty}</span>
                                <button class="qty-btn" onclick="event.stopPropagation(); changeQty(${item.id}, 1)">+</button>
                            </div>
                        ` : `
                            <button class="cta-btn" style="width: 100%; border-radius: 10px; font-weight: 800;" onclick="event.stopPropagation(); initiateAddToCart(${item.id}, ${restId}, '${safeRestName}')">
                                ADD TO CART
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderDineoutRestaurants() {
    const grid = document.getElementById('dineout-grid');
    if (!grid) return;

    let filtered = [...dineoutEscapes];
    
    // Search Filter
    if (globalSearchQuery) {
        const query = globalSearchQuery.toLowerCase();
        filtered = filtered.filter(res => 
            (res.name && res.name.toLowerCase().includes(query)) ||
            (res.type && res.type.toLowerCase().includes(query)) ||
            (res.locality && res.locality.toLowerCase().includes(query))
        );
    }

    // Tag Filter
    if (activeDineoutFilter !== 'Trending') {
        const tag = activeDineoutFilter.toLowerCase().replace(' ', '-').replace('-seating', '');
        filtered = filtered.filter(res => res.tags.includes(tag) || (activeDineoutFilter === '5-Star Dining' && res.tags.includes('5-star')));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <h3 style="color: #999;">No ${globalSearchQuery ? 'matches' : 'restaurants'} found</h3>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((res, index) => `
        <div class="rest-card dineout-card stagger-fade" style="animation-delay: ${index * 0.1}s; cursor: pointer;" onclick="window.openBooking('${res.name}')">
            <div style="position: relative; overflow: hidden; border-radius: 20px;">
                <img src="${res.img}" alt="${res.name}" style="width: 100%; height: 200px; object-fit: cover; transition: transform 0.5s ease;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 20px 15px; color: white;">
                    <div style="font-weight: 800; font-size: 1.1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${res.offer}</div>
                </div>
            </div>
            <div class="rest-info" style="padding: 1.5rem;">
                <div class="rest-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div>
                        <h3 class="rest-name" style="font-size: 1.25rem; font-weight: 900; color: #1c1c1c;">${res.name}</h3>
                        <p style="font-size: 0.85rem; color: #666; font-weight: 500;">${res.type} • ${res.locality}</p>
                    </div>
                    <span class="rest-rating" style="background: #23945d; color: white; padding: 4px 8px; border-radius: 6px; font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;">
                        ${res.rating} <i class="fas fa-star" style="font-size: 0.7rem;"></i>
                    </span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f0f0f0;">
                    <span style="font-weight: 700; color: #333;">${res.price}</span>
                    <button class="cta-btn" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 8px;">BOOK NOW</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.openBooking = function(name) {
    document.getElementById('book-hotel-name').textContent = name;
    document.getElementById('booking-modal').style.display = 'flex';
};

// Modals
window.openMenu = function(name) {
    const restId = name.length + 100; // Mock consistent ID
    document.getElementById('merchant-name').textContent = name;
    document.getElementById('menu-drawer').classList.add('open');
    const menuList = document.getElementById('merchant-menu-list');
    
    menuList.innerHTML = menuItems.slice(0, 15).map(item => {
        const cartItem = cart.find(i => i.id === item.id);
        return `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <div class="price">₹${item.price}</div>
                </div>
                <div class="menu-action">
                    ${cartItem ? `
                        <div class="qty-scroller" style="width: 100px;">
                            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                            <span class="qty-val">${cartItem.qty}</span>
                            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                        </div>
                    ` : `
                        <button class="cta-btn" style="padding: 0.5rem 1rem;" onclick="initiateAddToCart(${item.id}, ${restId}, '${name}')">Add</button>
                    `}
                </div>
            </div>
        `;
    }).join('');
};

window.openBooking = function(name) {
    document.getElementById('booking-modal').style.display = 'flex';
};

// --- ADVANCED CART & CUSTOMIZATION LOGIC ---

window.initiateAddToCart = function(id, restId, restName) {
    if (cartRestaurantId && cartRestaurantId != restId) {
        document.getElementById('clear-cart-modal').style.display = 'flex';
        document.getElementById('confirm-clear-cart').onclick = () => {
            clearCart();
            openCustomization(id, restId, restName);
            closeClearCartModal();
        };
        return;
    }
    openCustomization(id, restId, restName);
};

window.openCustomization = function(id, restId, restName) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    currentItemToCustomize = { ...item, restId, restName };
    
    document.getElementById('cust-name').textContent = item.name;
    document.getElementById('cust-price').textContent = `₹${item.price}`;
    document.getElementById('cust-img').src = item.img;
    document.getElementById('customization-modal').style.display = 'flex';
    document.getElementById('total-cust-price').textContent = `₹${item.price}`;
    
    document.getElementById('cust-instructions').value = '';
    document.querySelectorAll('#customization-modal input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelector('input[name="size"][value="Regular"]').checked = true;
    document.querySelector('input[name="spice"][value="Medium"]').checked = true;
    
    const updateLocalTotal = () => {
        let total = item.price;
        const sizeInput = document.querySelector('input[name="size"]:checked');
        if (sizeInput && sizeInput.value === 'Large') total += 50;
        
        document.querySelectorAll('input[name="addon"]:checked').forEach(cb => {
            total += parseInt(cb.dataset.price);
        });
        document.getElementById('total-cust-price').textContent = `₹${total}`;
    };

    document.querySelectorAll('#customization-modal input').forEach(input => {
        input.onchange = updateLocalTotal;
    });

    document.getElementById('add-customized-btn').onclick = () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        const spice = document.querySelector('input[name="spice"]:checked').value;
        const addons = Array.from(document.querySelectorAll('input[name="addon"]:checked')).map(cb => cb.value);
        const instructions = document.getElementById('cust-instructions').value;

        addFinalToCart({
            ...currentItemToCustomize,
            customization: { size, spice, addons, instructions },
            totalPrice: parseInt(document.getElementById('total-cust-price').textContent.replace('₹', ''))
        });

        closeCustomization();
    };
};

window.closeCustomization = function() {
    document.getElementById('customization-modal').style.display = 'none';
};

window.closeClearCartModal = function() {
    document.getElementById('clear-cart-modal').style.display = 'none';
};

function clearCart() {
    cart = [];
    cartRestaurantId = null;
    localStorage.removeItem('quickbite_cart');
    localStorage.removeItem('quickbite_restaurant_id');
    updateCartIcon();
}

function addFinalToCart(finalItem) {
    cartRestaurantId = finalItem.restId;
    localStorage.setItem('quickbite_restaurant_id', cartRestaurantId);
    cart.push({ ...finalItem, qty: 1, cartId: Date.now() });
    localStorage.setItem('quickbite_cart', JSON.stringify(cart));
    updateCartIcon();
    showToast(`${finalItem.name} added!`);
    renderFoodMarketplace();
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #22c55e;"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function updateCartIcon() {
    const count = cart.reduce((t, i) => t + i.qty, 0);
    document.getElementById('cart-count').textContent = count;
    renderCart();
}

window.toggleCart = function() {
    document.getElementById('cart-sidebar').classList.toggle('open');
};

window.renderCart = function() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 4rem 1rem; color: #999;"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.2;"></i><br>Your cart is empty</div>';
        updateCartSummary();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; gap: 12px; margin-bottom: 1.5rem; align-items: center;">
            <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="font-weight: 700; font-size: 0.9rem;">${item.name}</div>
                <div style="font-size: 0.7rem; color: #999;">${item.customization?.size || 'Regular'} • ${item.customization?.spice || 'Medium'}</div>
                <div style="color: var(--primary-color); font-weight: 800;">₹${(item.totalPrice || item.price) * item.qty}</div>
            </div>
            <div class="cart-qty-controls" style="display: flex; align-items: center; border: 1px solid #eee; border-radius: 6px;">
                <button onclick="changeQty(${item.id}, -1, ${item.cartId})" style="padding: 2px 8px; border: none; background: none;">-</button>
                <span style="font-weight: 800; font-size: 0.8rem; width: 20px; text-align: center;">${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1, ${item.cartId})" style="padding: 2px 8px; border: none; background: none;">+</button>
            </div>
        </div>
    `).join('');
    updateCartSummary();
};

window.changeQty = function(id, delta, cartId = null) {
    let item;
    if (cartId) item = cart.find(i => i.cartId === cartId);
    else item = cart.find(i => i.id === id);
    
    if (!item) return;
    
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i !== item);
    }
    
    if (cart.length === 0) cartRestaurantId = null;
    
    localStorage.setItem('quickbite_cart', JSON.stringify(cart));
    localStorage.setItem('quickbite_restaurant_id', cartRestaurantId);
    updateCartIcon();
    renderFoodMarketplace();
    
    // Also refresh menu drawer if open
    const drawer = document.getElementById('menu-drawer');
    if (drawer && drawer.classList.contains('open')) {
        openMenu(document.getElementById('merchant-name').textContent);
    }
};

function updateCartSummary() {
    const subtotal = cart.reduce((t, i) => t + (i.totalPrice * i.qty), 0);
    const delivery = subtotal === 0 ? 0 : (subtotal > 1000 ? 0 : 30);
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + delivery + gst;

    document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('cart-delivery').textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    document.getElementById('cart-gst').textContent = `₹${gst}`;
    document.getElementById('cart-total').textContent = `₹${total}`;
}

// --- INITIALIZATION ---
// Initialization
    // Mode Switchers
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAppMode(tab.dataset.mode));
    });

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter || 'all';
            renderDeliveryRestaurants();
        });
    });

    // Inpiration Scroller Filters
    // Interaction handlers moved to bottom for better scope management

    // Dineout Filters
    document.querySelectorAll('#dineout-section .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#dineout-section .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeDineoutFilter = btn.textContent.trim();
            renderDineoutRestaurants();
        });
    });

    // Close buttons
    document.querySelectorAll('.close-drawer').forEach(btn => {
        btn.addEventListener('click', () => document.getElementById('menu-drawer').classList.remove('open'));
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('booking-modal')) {
            document.getElementById('booking-modal').style.display = "none";
        }
        if (event.target == document.getElementById('customization-modal')) {
            closeCustomization();
        }
        if (event.target == document.getElementById('clear-cart-modal')) {
            closeClearCartModal();
        }
        if (event.target == document.getElementById('auth-modal')) {
            document.getElementById('auth-modal').style.display = 'none';
        }
        if (event.target == document.getElementById('order-modal')) {
            document.getElementById('order-modal').style.display = 'none';
        }
    };

    // Confirm Booking
    const confirmBooking = document.getElementById('confirm-booking-btn');
    if(confirmBooking) {
        confirmBooking.onclick = () => {
            const user = DataStore.getCurrentUser();
            if (!user) {
                document.getElementById('booking-modal').style.display = 'none';
                showAuth("Login to reserve your table");
                return;
            }
            const bookingId = "QB" + Math.floor(Math.random()*900000 + 100000);
            const hotelName = document.getElementById('book-hotel-name').textContent;
            const date = document.getElementById('book-date').value || "Tomorrow";
            const time = document.getElementById('book-time').value || "7:00 PM";
            const guests = document.getElementById('book-guests').value || "2";

            // Generate QR Code URL
            const qrData = `BookingID:${bookingId}|Hotel:${hotelName}|User:${user.name}`;
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

            const newBooking = {
                id: bookingId,
                hotel: hotelName,
                date: date,
                time: time,
                guests: guests,
                qr: qrUrl,
                timestamp: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
                status: 'Confirmed'
            };

            const userBookings = JSON.parse(localStorage.getItem(`qb_bookings_${user.email}`)) || [];
            userBookings.unshift(newBooking);
            localStorage.setItem(`qb_bookings_${user.email}`, JSON.stringify(userBookings));

            // Success Visuals
            document.getElementById('booking-modal').style.display = "none";
            if (window.confetti) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#fc8019', '#ffffff', '#23945d']
                });
            }
            
            showToast(`🎉 Reservation Successful! Order ID: ${bookingId}`);
            if (window.profileManager) window.profileManager.renderOrders();
        };
    }


    // AUTH & PROFILE
    const profileBtn = document.getElementById('profile-btn');
    const landingSigninBtn = document.getElementById('landing-signin-btn');
    
    const showAuth = (message = "Sign in to QuickBite") => {
        const users = DataStore.getUsers();
        const authTitle = document.querySelector('#auth-modal h3');
        if (authTitle) authTitle.innerText = message;
        
        if (users.length > 0) {
            const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
            if (loginTab) loginTab.click();
        }

        document.getElementById('auth-modal').style.display = 'flex';
        const card = document.querySelector('.auth-card');
        if (card) {
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = null;
        }
    };

    const showProfileHub = () => {
        const user = DataStore.getCurrentUser();
        if (!user) {
            showAuth("Login to view your Profile");
            return;
        }

        const hub = document.getElementById('profile-hub');
        if (hub) {
            hub.classList.add('active');
            if (window.profileManager) window.profileManager.renderCurrentSection();
        }
    };

    if (profileBtn) profileBtn.onclick = showProfileHub;
    if (landingSigninBtn) landingSigninBtn.onclick = () => showAuth();

    const closeAuthBtn = document.getElementById('close-auth-btn');
    if (closeAuthBtn) {
        closeAuthBtn.onclick = () => {
            document.getElementById('auth-modal').style.display = 'none';
        };
    }

    const closeProfileBtn = document.getElementById('close-profile-btn');
    if (closeProfileBtn) {
        closeProfileBtn.onclick = () => {
            document.getElementById('profile-hub').classList.remove('active');
        };
    }

    // Auth Tab Switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const target = tab.dataset.tab;
            document.querySelectorAll('.auth-view').forEach(view => {
                view.classList.toggle('active', view.id === `${target}-view`);
            });
        });
    });

    // Auth Form Submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            const mobile = loginForm.querySelector('input[type="tel"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            const users = DataStore.getUsers();
            const user = users.find(u => u.phone === mobile && u.password === password);

            if (user) {
                DataStore.setCurrentUser(user);
                showToast(`Welcome back, ${user.name}!`);
                document.getElementById('auth-modal').style.display = 'none';
                if (document.getElementById('landing-page').style.display !== 'none') {
                    enterApp();
                } else {
                    // Refresh UI if already in app
                    const profileBtn = document.getElementById('profile-btn');
                    if (profileBtn) profileBtn.innerHTML = `<span style="font-size: 0.8rem; font-weight: 800; color: var(--primary-color);">${user.name.split(' ')[0]}</span>`;
                }
            } else {
                showToast('Invalid credentials. Check mobile/password!');
            }
        };
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const mobile = document.getElementById('reg-mobile').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const pincode = document.getElementById('reg-pincode').value;
            const area = document.getElementById('reg-area').value;
            const street = document.getElementById('reg-street').value;
            const district = document.getElementById('reg-district').value;
            const state = document.getElementById('reg-state').value;

            const users = DataStore.getUsers();
            if (users.some(u => u.email === email || u.phone === mobile)) {
                showToast('Email or Mobile already registered!');
                return;
            }

            const newUser = { 
                name, email, phone: mobile, password, 
                joined: new Date().getFullYear(),
                photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
            };
            DataStore.saveUser(newUser);

            // Save initial address
            const firstAddress = {
                id: Date.now(),
                type: 'Home',
                full: `${street}, ${area}, ${district}, ${state} - ${pincode}`,
                default: true
            };
            DataStore.saveAddress(email, firstAddress);

            showToast('Account created successfully! Please Login.');
            document.querySelector('.auth-tab[data-tab="login"]').click();
        };
    }

    // AI Suggestion
    const aiBtn = document.getElementById('ai-suggest-btn');
    if (aiBtn) {
        aiBtn.onclick = () => {
            const results = ["Truffle Margherita Pizza", "Monster Smoke Burger", "Royal Hyderabadi Biryani", "Belgian Chocolate Waffles"];
            const suggestion = results[Math.floor(Math.random() * results.length)];
            const resDiv = document.getElementById('ai-suggestion-result');
            resDiv.innerHTML = `<div style="margin-top: 1rem; padding: 1rem; background: #fff; border-radius: 12px; border: 1px solid var(--primary-color); animation: fadeIn 0.5s ease;">
                <h4 style="color: var(--primary-color);">AI Pick: ${suggestion}</h4>
                <p style="font-size: 0.8rem; color: #666;">Based on your mood and the current time, we think you'll love this!</p>
            </div>`;
        };
    }

    // --- Profile Manager ---
    class ProfileManager {
        constructor() {
            this.activeSection = 'info';
            this.init();
        }

        init() {
            document.querySelectorAll('.profile-nav .nav-item[data-section]').forEach(item => {
                item.onclick = () => this.switchSection(item.dataset.section);
            });

            const infoForm = document.getElementById('edit-profile-form');
            if (infoForm) {
                infoForm.onsubmit = (e) => {
                    e.preventDefault();
                    this.updateUserInfo();
                };
            }

            const hubLogout = document.getElementById('hub-logout-btn');
            if (hubLogout) {
                hubLogout.onclick = () => {
                    if (confirm('Are you sure you want to log out?')) {
                        DataStore.logout();
                        exitApp();
                        document.getElementById('profile-hub').classList.remove('active');
                        if (window.updateAuthVisuals) window.updateAuthVisuals();
                        showToast('Logged out successfully');
                    }
                };
            }

            const darkToggle = document.getElementById('dark-mode-toggle');
            if (darkToggle) {
                darkToggle.onchange = (e) => {
                    document.body.classList.toggle('dark-theme', e.target.checked);
                    showToast(e.target.checked ? 'Dark Mode Enabled' : 'Light Mode Enabled');
                };
            }

            const deleteAccount = document.getElementById('delete-account-trigger');
            if (deleteAccount) {
                deleteAccount.onclick = () => {
                    document.getElementById('confirm-modal').style.display = 'flex';
                };
            }

            const addAddrBtn = document.getElementById('add-address-btn');
            if (addAddrBtn) {
                addAddrBtn.onclick = () => {
                    document.getElementById('addr-modal-title').innerText = 'Add New Address';
                    document.getElementById('edit-addr-id').value = '';
                    document.getElementById('add-address-form').reset();
                    document.getElementById('address-modal').style.display = 'flex';
                };
            }
            
            this.addAddress(); 

            // Profile Picture - File Upload
            const picInput = document.getElementById('profile-pic-input');
            if (picInput) {
                picInput.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const b64 = event.target.result;
                            const user = DataStore.getCurrentUser();
                            
                            // Update all photo instances
                            const imgs = ['hub-profile-img', 'info-profile-preview'];
                            imgs.forEach(id => {
                                const img = document.getElementById(id);
                                if (img) img.src = b64;
                            });

                            if (user) {
                                user.photo = b64;
                                DataStore.updateUser(user);
                            }
                            showToast('Profile Photo Updated!');
                        };
                        reader.readAsDataURL(file);
                    }
                };
            }

            document.getElementById('cancel-confirm').onclick = () => {
                document.getElementById('confirm-modal').style.display = 'none';
            };

            document.getElementById('proceed-confirm').onclick = () => {
                const user = DataStore.getCurrentUser();
                let users = DataStore.getUsers().filter(u => u.email !== user.email);
                localStorage.setItem('qb_users', JSON.stringify(users));
                DataStore.logout();
                alert('Account Deleted Successfully');
                location.reload();
            };
        }

        switchSection(sectionId) {
            this.activeSection = sectionId;
            document.querySelectorAll('.profile-nav .nav-item').forEach(i => i.classList.remove('active'));
            const navItem = document.querySelector(`.profile-nav .nav-item[data-section="${sectionId}"]`);
            if (navItem) navItem.classList.add('active');
            
            document.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
            const targetSection = document.getElementById(`section-${sectionId}`);
            if (targetSection) targetSection.classList.add('active');
            
            this.renderCurrentSection();
        }

        renderCurrentSection() {
            const user = DataStore.getCurrentUser();
            if (!user) return;

            // Update user quick brief always
            document.getElementById('hub-user-name').textContent = user.name;
            document.getElementById('hub-user-meta').textContent = `${user.phone} • ${user.email}`;
            
            // Sync form values if in Info section
            if (this.activeSection === 'info') {
                document.getElementById('profile-name').value = user.name;
                document.getElementById('profile-email').value = user.email;
                document.getElementById('profile-phone').value = user.phone;
                
                const preview = document.getElementById('info-profile-preview');
                if (preview && user.photo) preview.src = user.photo;
            }

            try {
                switch(this.activeSection) {
                    case 'orders': this.renderOrders(); break;
                    case 'addresses': this.renderAddresses(); break;
                    case 'favorites': this.renderFavorites(); break;
                    case 'payments': this.renderPayments(); break;
                    case 'support': this.renderComplaints(); break;
                    case 'offers': this.renderOffers(); break;
                }
            } catch (err) {
                console.error("Section Render Error:", err);
            }
        }

        renderOrders() {
            const list = document.getElementById('profile-order-list');
            if (!list) return;
            const user = DataStore.getCurrentUser();
            const orders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
            const bookings = JSON.parse(localStorage.getItem(`qb_bookings_${user.email}`)) || [];
            
            if (orders.length === 0 && bookings.length === 0) {
                list.innerHTML = '<div style="text-align: center; padding: 3rem; color: #999;">No activities yet. Start exploring!</div>';
                return;
            }

            let combinedHTML = '';

            // Render Orders
            if (orders.length > 0) {
                combinedHTML += orders.map(o => `
                    <div class="order-card">
                        <div class="order-main-info">
                            <h4>Delivery Order #${o.id}</h4>
                            <p class="order-meta">${o.timestamp}</p>
                            <div style="margin-top: 10px; font-weight: 800; color: var(--primary-color);">₹${o.total}</div>
                            <span class="order-status ${o.status === 'Delivered' ? 'status-delivered' : 'status-preparing'}">${o.status || 'Confirmed'}</span>
                            ${o.status !== 'Delivered' ? `<button class="cta-btn" style="margin-top: 10px; padding: 6px 12px; font-size: 0.7rem; width: fit-content;" onclick="window.openTracking('${o.id}')"><i class="fas fa-location-dot"></i> Track Live</button>` : ''}
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <button class="cta-btn btn-sm" onclick="window.profileManager.downloadInvoice('${o.id}')">Invoice</button>
                            <button class="cta-btn btn-sm" style="background:#333" onclick="window.profileManager.reorderItems('${o.id}')">Reorder</button>
                        </div>
                    </div>
                `).join('');
            }

            if (bookings.length > 0) {
                combinedHTML += bookings.map(b => `
                    <div class="order-card" style="border-left-color: #23945d;">
                        <div style="display: flex; gap: 20px;">
                            <div class="order-main-info" style="flex: 1;">
                                <h4 style="color: #23945d;"><i class="fas fa-utensils"></i> Dineout: ${b.hotel}</h4>
                                <p class="order-meta">${b.date} at ${b.time}</p>
                                <div style="margin-top: 10px; font-weight: 800; font-size: 0.9rem; color: #1c1c1c;">Booking ID: ${b.id}</div>
                                <div style="margin-top: 5px; font-size: 0.8rem; color: #666;">Guests: ${b.guests} People</div>
                                <span class="order-status" style="background: #e7f7ef; color: #23945d; margin-top: 10px; display: inline-block;">Confirmed</span>
                            </div>
                            <div style="text-align: center; background: #fff; padding: 5px; border-radius: 12px; border: 1px solid #eee;">
                                <img src="${b.qr || 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + b.id}" style="width: 80px; height: 80px; display: block; margin-bottom: 5px;">
                                <span style="font-size: 0.6rem; font-weight: 800; color: #ccc;">SCAN AT ENTRY</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }

            list.innerHTML = combinedHTML;
        }

        renderAddresses() {
            try {
                const list = document.getElementById('profile-address-list');
                if (!list) return;
                const user = DataStore.getCurrentUser();
                const addresses = DataStore.getAddresses(user.email) || [];
                
                if (addresses.length === 0) {
                    list.innerHTML = `
                        <div style="grid-column: 1/-1; text-align: center; padding: 4rem; background: #fafafa; border-radius: 20px; border: 2px dashed #eee;">
                            <div style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"><i class="fas fa-map-marked-alt"></i></div>
                            <h3 style="color: #666;">No Saved Addresses</h3>
                            <p style="color: #999; margin-bottom: 2rem;">Add an address to speed up your checkout process.</p>
                            <button class="cta-btn" onclick="document.getElementById('add-address-btn').click()">Add Your First Address</button>
                        </div>
                    `;
                    return;
                }

                list.innerHTML = addresses.map(a => `
                    <div class="address-item ${a.default ? 'default' : ''}">
                        <span class="address-tag">${a.type}</span>
                        <h4><i class="fas fa-${a.type.toLowerCase() === 'home' ? 'home' : (a.type.toLowerCase() === 'work' ? 'briefcase' : 'map-marker-alt')}"></i> ${a.type}</h4>
                        <p>${a.full}</p>
                        <div style="margin-top: 15px; display: flex; gap: 10px;">
                            <button class="btn-text" onclick="window.profileManager.editAddress('${a.id}')" style="color: var(--primary-color); font-size: 0.8rem; font-weight: 700; border: none; background: none; cursor: pointer;">Edit</button>
                            <button class="btn-text" onclick="window.profileManager.removeAddress('${a.id}')" style="color: #e74c3c; font-size: 0.8rem; font-weight: 700; border: none; background: none; cursor: pointer;">Delete</button>
                        </div>
                    </div>
                `).join('');
            } catch (err) {
                console.error("Render Addresses Error:", err);
                const list = document.getElementById('profile-address-list');
                if (list) list.innerHTML = '<p style="color: red;">Failed to load addresses. Please refresh.</p>';
            }
        }

        addAddress() {
            const addBtn = document.getElementById('add-address-btn');
            if (addBtn) {
                addBtn.onclick = () => {
                    document.getElementById('address-modal').style.display = 'flex';
                };
            }

            const form = document.getElementById('add-address-form');
            if (form) {
                form.onsubmit = (e) => {
                    e.preventDefault();
                    const user = DataStore.getCurrentUser();
                    const type = document.getElementById('addr-type').value;
                    const full = document.getElementById('addr-full').value;
                    const editId = document.getElementById('edit-addr-id').value;
                    
                    const addressData = {
                        id: editId ? editId : Date.now(),
                        type: type,
                        full: full,
                        default: false
                    };

                    if (editId) {
                        DataStore.updateAddress(user.email, addressData);
                        showToast('Address Updated!');
                    } else {
                        DataStore.saveAddress(user.email, addressData);
                        showToast('Address Added Successfully!');
                    }
                    
                    document.getElementById('address-modal').style.display = 'none';
                    form.reset();
                    this.renderAddresses();
                };
            }
        }

        editAddress(id) {
            const user = DataStore.getCurrentUser();
            const addrs = DataStore.getAddresses(user.email);
            const addr = addrs.find(a => a.id.toString() === id.toString());
            
            if (addr) {
                document.getElementById('addr-modal-title').innerText = 'Edit Address';
                document.getElementById('edit-addr-id').value = addr.id;
                document.getElementById('addr-type').value = addr.type;
                document.getElementById('addr-full').value = addr.full;
                document.getElementById('address-modal').style.display = 'flex';
            }
        }

        removeAddress(id) {
            const user = DataStore.getCurrentUser();
            DataStore.deleteAddress(user.email, id);
            this.renderAddresses();
            showToast('Address Deleted');
        }

        renderFavorites(type = 'restaurants') {
            const grid = document.getElementById('profile-fav-grid');
            if (!grid) return;
            
            if (type === 'restaurants') {
                const favorites = restaurants.slice(0, 4);
                grid.innerHTML = favorites.map(f => `
                    <div class="rest-card" style="margin-bottom: 0;">
                        <img src="${f.img}" style="height: 120px;">
                        <div class="rest-info" style="padding: 10px;">
                            <h4 style="font-size: 0.9rem;">${f.name}</h4>
                            <p style="font-size: 0.7rem;">${f.rating} ⭐</p>
                        </div>
                    </div>
                `).join('');
            } else {
                const favorites = menuItems.slice(0, 4);
                grid.innerHTML = favorites.map(f => `
                    <div class="rest-card" style="margin-bottom: 0;">
                        <img src="${f.img}" style="height: 120px;">
                        <div class="rest-info" style="padding: 10px;">
                            <h4 style="font-size: 0.9rem;">${f.name}</h4>
                            <p style="font-size: 0.7rem;">₹${f.price}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        downloadInvoice(orderId) {
            const user = DataStore.getCurrentUser();
            const orders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
            const order = orders.find(o => o.id.toString() === orderId.toString());

            if (!order) {
                showToast("Invoice not found!");
                return;
            }

            const itemsText = order.items.map(i => `- ${i.name} (x${i.qty || 1}) - ₹${i.price}`).join('\n');
            const invoiceContent = `
-----------------------------------------
           QUICKBITE INVOICE
-----------------------------------------
Order ID:    ${order.id}
Date:        ${order.timestamp}
Restaurant:  ${order.merchant || 'QuickBite Partner'}
-----------------------------------------
CUSTOMER DETAILS:
Name:        ${order.customerName || user.name}
Address:     ${order.address || 'Standard Delivery'}
-----------------------------------------
ORDER ITEMS:
${itemsText}
-----------------------------------------
TOTAL AMOUNT: ₹${order.total}
PAYMENT:      ${order.paymentMethod ? order.paymentMethod.toUpperCase() : 'PREPAID'}
-----------------------------------------
      Thank you for ordering!
-----------------------------------------
            `;

            const blob = new Blob([invoiceContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `QuickBite_Invoice_${order.id}.txt`;
            link.click();
            URL.revokeObjectURL(url);
            showToast('Invoice Downloaded!');
        }

        reorderItems(orderId) {
            const user = DataStore.getCurrentUser();
            const orders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
            const order = orders.find(o => o.id.toString() === orderId.toString());

            if (!order) return;

            // Handle Restaurant Conflict
            if (cart.length > 0 && cartRestaurantId !== order.restId) {
                document.getElementById('clear-cart-modal').style.display = 'flex';
                document.getElementById('confirm-clear-cart').onclick = () => {
                    cart = [];
                    cartRestaurantId = order.restId;
                    this.addOrderItemsToCart(order);
                    document.getElementById('clear-cart-modal').style.display = 'none';
                };
                return;
            }

            cartRestaurantId = order.restId;
            this.addOrderItemsToCart(order);
        }

        addOrderItemsToCart(order) {
            order.items.forEach(item => {
                const existing = cart.find(i => i.id === item.id);
                if (existing) {
                    existing.qty += (item.qty || 1);
                } else {
                    cart.push({ ...item });
                }
            });
            
            localStorage.setItem('quickbite_cart', JSON.stringify(cart));
            localStorage.setItem('quickbite_restaurant_id', cartRestaurantId);
            updateCartIcon();
            document.getElementById('cart-sidebar').classList.add('open');
            showToast('Items added to cart!');
        }

        renderOffers() {
            const wall = document.getElementById('profile-coupons');
            if (!wall) return;
            const coupons = [
                { code: 'WELCOM50', desc: '50% Off on your first order', expiry: 'Exp in 2 days' },
                { code: 'GOLDPLUS', desc: 'Extra 10% Off for Gold members', expiry: 'Exp in 10 days' }
            ];
            wall.innerHTML = coupons.map(c => `
                <div class="history-item" style="padding: 1.5rem; background: #fffaf5; border: 1px dashed var(--primary-color);">
                    <div>
                        <h4 style="color: var(--primary-color);">${c.code}</h4>
                        <p style="font-size: 0.8rem;">${c.desc}</p>
                    </div>
                    <span style="font-size: 0.7rem; color: #999;">${c.expiry}</span>
                </div>
            `).join('');
        }

        updateUserInfo() {
            const name = document.getElementById('profile-name').value;
            const phone = document.getElementById('profile-phone').value;
            
            const user = DataStore.getCurrentUser();
            user.name = name;
            user.phone = phone;
            
            DataStore.updateUser(user);
            this.renderCurrentSection();
            showToast('Profile Updated!');
        }

        renderPayments() {
            const user = DataStore.getCurrentUser();
            if (!user) return;
            
            const display = document.getElementById('wallet-display');
            if (display) display.innerText = `₹${DataStore.getWallet(user.email)}`;
            
            const list = document.getElementById('payment-methods-list');
            if (!list) return;
            
            const methods = DataStore.getPayments(user.email);
            list.innerHTML = methods.map(p => `
                <div class="p-method-card" style="display:flex; align-items:center; border: 1px solid #eee; border-radius:15px; padding:1rem; margin-bottom:1rem; position:relative;">
                    <div class="p-icon" style="width:40px; font-size:1.5rem; color:var(--primary-color);">
                        <i class="${p.type === 'Card' ? 'fab fa-cc-' + p.provider.toLowerCase() : 'fas fa-mobile-alt'}"></i>
                    </div>
                    <div class="p-info" style="flex:1; margin-left:15px;">
                        <h4 style="margin:0; font-size:0.95rem;">${p.type === 'Card' ? '•••• •••• •••• ' + p.last4 : p.upiId}</h4>
                        <p style="margin:0; font-size:0.75rem; color:#999;">${p.type === 'Card' ? 'Expires ' + p.expiry : 'UPI ID'}</p>
                    </div>
                    ${p.default ? '<span class="p-badge" style="background:#e8f4fd; color:#3498db; padding:2px 8px; border-radius:4px; font-size:0.65rem; font-weight:700;">Default</span>' : ''}
                    <i class="fas fa-trash-alt" style="color:#e74c3c; cursor:pointer; margin-left:10px; font-size:0.8rem;" onclick="profileManager.deletePayment('${p.id}')"></i>
                </div>
            `).join('');
        }

        switchPayType(type) {
            this.currentPayType = type;
            document.getElementById('pay-select-card').classList.toggle('active', type === 'Card');
            document.getElementById('pay-select-upi').classList.toggle('active', type === 'UPI');
            document.getElementById('card-inputs').style.display = type === 'Card' ? 'block' : 'none';
            document.getElementById('upi-inputs').style.display = type === 'UPI' ? 'block' : 'none';
        }

        handlePaymentSubmit(e) {
            e.preventDefault();
            const user = DataStore.getCurrentUser();
            if (!user) return;
            
            let method = { 
                id: 'p' + Date.now(), 
                type: this.currentPayType || 'Card',
                default: false 
            };
            
            if (method.type === 'Card') {
                const num = document.getElementById('pay-card-num').value;
                const exp = document.getElementById('pay-card-exp').value;
                if (!num || num.length < 16) return showToast('Invalid card number', true);
                method.last4 = num.slice(-4);
                method.expiry = exp;
                method.provider = 'Visa'; // Simplified
            } else {
                const upi = document.getElementById('pay-upi-id').value;
                if (!upi.includes('@')) return showToast('Invalid UPI ID', true);
                method.upiId = upi;
                method.provider = 'UPI';
            }
            
            DataStore.savePayment(user.email, method);
            this.renderPayments();
            document.getElementById('payment-modal').style.display = 'none';
            document.getElementById('payment-form').reset();
            showToast('Payment method added!');
        }

        deletePayment(id) {
            const user = DataStore.getCurrentUser();
            if (!user) return;
            DataStore.deletePayment(user.email, id);
            this.renderPayments();
            showToast('Method removed');
        }

        addMoney() {
            const amount = parseFloat(document.getElementById('wallet-amount').value);
            if (isNaN(amount) || amount < 10) return showToast('Enter valid amount (Min ₹10)', true);
            
            const user = DataStore.getCurrentUser();
            if (!user) return;
            
            const newBal = DataStore.updateWallet(user.email, amount);
            document.getElementById('wallet-display').innerText = `₹${newBal}`;
            document.getElementById('wallet-modal').style.display = 'none';
            document.getElementById('wallet-amount').value = '';
            
            if (window.confetti) {
                confetti({
                    particleCount: 100, spread: 70, origin: { y: 0.6 },
                    colors: ['#fc8019', '#ffffff', '#23945d']
                });
            }
            showToast(`₹${amount} added successfully!`);
        }

        renderComplaints() {
            const user = DataStore.getCurrentUser();
            if (!user) return;
            const list = document.getElementById('complaint-list-container');
            if (!list) return;
            
            const tickets = DataStore.getComplaints(user.email);
            list.innerHTML = tickets.map(t => `
                <div class="history-item" style="display:flex; justify-content:space-between; align-items:center; border: 1px solid #eee; padding:12px 15px; border-radius:12px; margin-bottom:10px;">
                    <div>
                        <div style="font-weight:700; font-size:0.85rem;">#${t.id} - ${t.issue}</div>
                        <div style="font-size:0.7rem; color:#999; margin-top:3px;">Created: ${t.date}</div>
                    </div>
                    <span class="status-badge" style="background:${t.status === 'Resolved' ? '#e7f7ef' : '#fff4e5'}; color:${t.status === 'Resolved' ? '#23945d' : '#fc8019'}; padding:4px 10px; border-radius:6px; font-size:0.7rem; font-weight:700;">
                        ${t.status}
                    </span>
                </div>
            `).join('');
        }

        submitComplaint() {
            const input = document.getElementById('complaint-input');
            const issue = input.value.trim();
            if (!issue) return showToast('Please describe your issue', true);
            
            const user = DataStore.getCurrentUser();
            const ticket = {
                id: 'TC-' + Math.floor(1000 + Math.random() * 9000),
                issue: issue,
                status: 'Pending',
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };
            
            DataStore.saveComplaint(user.email, ticket);
            this.renderComplaints();
            input.value = '';
            showToast('Complaint filed successfully!');
        }
    }

    let trackingTimer = null;

    window.openTracking = function(orderId) {
        const user = DataStore.getCurrentUser();
        if (!user) return;
        const orders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
        const order = orders.find(o => o.id.toString() === orderId.toString());
        if (!order) return;

        const modal = document.getElementById('tracking-modal');
        modal.style.display = 'flex';

        // Reset and clear any existing simulation
        if (trackingTimer) clearTimeout(trackingTimer);

        document.getElementById('track-order-id').innerText = `#${order.id}`;
        document.getElementById('track-timestamp').innerText = order.timestamp;
        document.getElementById('track-rest-name').innerText = order.restName || "Restaurant";

        // Initial state logic
        let startingStep = 0;
        if (order.status === 'Delivered') startingStep = 4;
        else if (order.status === 'Out for Delivery') startingStep = 3;
        else if (order.status === 'Picked Up') startingStep = 2;

        const rider = document.getElementById('live-rider');
        rider.style.transition = "all 4.5s linear"; // Match simulation interval

        updateTrackingUI(startingStep, orderId);
    };

    function updateTrackingUI(step, orderId) {
        const steps = [
            { text: "Your order is confirmed", eta: "35", status: "Confirmed", pos: { left: '10%', top: '70%'} },
            { text: "Chef is preparing your meal", eta: "25", status: "Preparing", pos: { left: '15%', top: '65%'} },
            { text: "Rider has picked up the bag", eta: "15", status: "Picked Up", pos: { left: '30%', top: '55%'} },
            { text: "Rider is almost there!", eta: "5", status: "Out for Delivery", pos: { left: '70%', top: '30%'} },
            { text: "Order Delivered!", eta: "0", status: "Delivered", pos: { left: '90%', top: '20%'} }
        ];

        const s = steps[step];
        document.getElementById('track-status-text').innerText = s.text;
        document.getElementById('track-eta').innerText = s.eta + " mins";
        
        const rider = document.getElementById('live-rider');
        if (rider) {
            rider.style.left = s.pos.left;
            rider.style.top = s.pos.top;
        }

        document.querySelectorAll('.timeline-step').forEach((el, idx) => {
            el.classList.remove('active', 'completed');
            if (idx < step) el.classList.add('completed');
            if (idx === step) el.classList.add('active');
        });

        // Update the actual order status in Store
        const user = DataStore.getCurrentUser();
        if (user) {
            const orders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
            const idx = orders.findIndex(o => o.id.toString() === orderId.toString());
            if (idx !== -1) {
                orders[idx].status = s.status;
                localStorage.setItem(`qb_orders_${user.email}`, JSON.stringify(orders));
                // If profile is open and on orders section, refresh it
                if (window.profileManager && window.profileManager.activeSection === 'orders') {
                    window.profileManager.renderOrders();
                }
            }
        }

        if (step < 4) {
            trackingTimer = setTimeout(() => updateTrackingUI(step + 1, orderId), 5000);
        } else {
            if (window.confetti) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#fc8019', '#23945d', '#fff']
                });
            }
            showToast('Enjoy your meal!');
        }
    }

    // --- WOW FEATURES: PERSONALIZATION & MOOD ---
    window.initWowFeatures = function() {
        const user = DataStore.getCurrentUser();
        if (!user) return;

        // 1. Time-based Greeting
        const hour = new Date().getHours();
        let greet = "Good Evening";
        if (hour < 12) greet = "Good Morning";
        else if (hour < 17) greet = "Good Afternoon";
        
        const grText = document.getElementById('greeting-text');
        const grName = document.getElementById('greeting-name');
        if (grText) grText.innerText = greet;
        if (grName) grName.innerText = user.name.split(' ')[0];

        // 2. Initial Coins
        const coinCount = document.getElementById('nav-coin-count');
        if (coinCount) coinCount.innerText = DataStore.getCoins(user.email);
    };

    window.setMood = function(mood, el) {
        // Toggle UI
        document.querySelectorAll('.mood-tile').forEach(c => c.classList.remove('active'));
        el.classList.add('active');

        // Filter Logic (Simulated)
        if (mood === 'healthy') {
            globalSearchQuery = 'salad';
        } else if (mood === 'lazy') {
            globalSearchQuery = 'burger';
        } else if (mood === 'party') {
            globalSearchQuery = 'pizza';
        } else {
            globalSearchQuery = '';
        }
        
        renderFoodMarketplace();
        showToast(`Showing ${mood} picks!`);
    };

    // Initialize Wow Features on startup
    setTimeout(window.initWowFeatures, 500);

    // Initialize Profile Manager
    window.profileManager = new ProfileManager();

    // Closing Profile on click outside
    window.addEventListener('click', (e) => {
        const hub = document.getElementById('profile-hub');
        if (e.target === hub) hub.classList.remove('active');
    });

    // Cart Sidebar
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    if (cartBtn) cartBtn.onclick = toggleCart;
    if (closeCart) closeCart.onclick = toggleCart;

    // Checkout
    const checkoutBtn = document.getElementById('proceed-btn');
    const orderModal = document.getElementById('order-modal');
    const orderForm = document.getElementById('order-form');
    const formStep = document.getElementById('form-step');
    const successStep = document.getElementById('success-step');

    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            if (!DataStore.getCurrentUser()) {
                showAuth();
                return;
            }
            if (cart.length === 0) return alert('Your cart is empty!');
            orderModal.style.display = 'flex';
            formStep.style.display = 'block';
            successStep.style.display = 'none';
        };
    }

    if (orderForm) {
        orderForm.onsubmit = (e) => {
            e.preventDefault();
            formStep.style.display = 'none';
            successStep.style.display = 'block';
            if (window.confetti) {
                confetti({
                    particleCount: 150, spread: 70, origin: { y: 0.6 },
                    colors: ['#fc8019', '#ffffff', '#23945d']
                });
            }
            simulateOrderTracking();
            const orderId = "QB" + Math.floor(Math.random()*900000 + 100000);
            const total = document.getElementById('cart-total').textContent.replace('₹', '');
            const customerName = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const merchant = document.getElementById('merchant-name').textContent;
            const paymentMethod = document.getElementById('payment').value;

            const newOrder = {
                id: orderId, 
                items: [...cart], 
                total: total, 
                customerName: customerName,
                address: address,
                merchant: merchant,
                restId: cartRestaurantId, // Save restaurant ID for reordering
                paymentMethod: paymentMethod,
                status: 'Placed',
                timestamp: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
            };
            
            const user = DataStore.getCurrentUser();
            const userOrders = JSON.parse(localStorage.getItem(`qb_orders_${user.email}`)) || [];
            userOrders.unshift(newOrder);
            localStorage.setItem(`qb_orders_${user.email}`, JSON.stringify(userOrders));
            
            orderHistory.unshift(newOrder);
            renderHistory();
            cart = []; cartRestaurantId = null;
            localStorage.removeItem('quickbite_cart');
            localStorage.removeItem('quickbite_restaurant_id');
            updateCartIcon();
            renderFoodMarketplace();
        };
    }

    function simulateOrderTracking() {
        const stepKitchen = document.getElementById('step-kitchen');
        const stepDelivery = document.getElementById('step-delivery');
        const marker = document.getElementById('delivery-marker');
        setTimeout(() => {
            if (stepKitchen) {
                stepKitchen.parentElement.classList.add('active');
                stepKitchen.parentElement.previousElementSibling.classList.add('completed');
            }
        }, 3000);
        setTimeout(() => {
            if (stepDelivery) {
                stepDelivery.parentElement.classList.add('active');
                stepDelivery.parentElement.previousElementSibling.classList.add('completed');
                if (marker) marker.style.left = '75%';
            }
        }, 8000);
    }

    // Portal Links
    const portals = {
        'open-merchant': 'Merchant Dashboard initialized...',
        'open-delivery': 'Delivery Partner Panel loading...',
        'open-admin': 'System Administration opening...'
    };
    Object.keys(portals).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.onclick = () => alert(portals[id]);
    });

// --- Global History logic ---
window.currentHistoryTab = 'orders';

window.switchHistoryTab = function(tab, btn) {
    window.currentHistoryTab = tab;
    document.querySelectorAll('.history-tab-btn').forEach(b => {
        b.classList.remove('active');
        b.style.color = '#999';
    });
    btn.classList.add('active');
    btn.style.color = 'var(--primary-color)';
    window.renderHistory();
};

window.renderHistory = function() {
    const container = document.getElementById('history-list-container');
    if (!container) return;
    const user = DataStore.getCurrentUser();
    if (!user) return;

    const ordKey = `qb_orders_${user.email}`;
    const booKey = `qb_bookings_${user.email}`;
    
    const orderHistory = JSON.parse(localStorage.getItem(ordKey)) || [];
    const bookingHistory = JSON.parse(localStorage.getItem(booKey)) || [];

    if (window.currentHistoryTab === 'orders') {
        if (orderHistory.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No orders found</div>';
        } else {
            container.innerHTML = orderHistory.map(order => `
                <div class="history-item" style="border: 1px solid #eee; border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                        <div>
                            <div style="font-weight: 800; font-size: 0.9rem;">Order ${order.id}</div>
                            <div style="font-size: 0.75rem; color: #999;">${order.timestamp}</div>
                        </div>
                        <span class="history-status" style="background: ${order.status === 'Delivered' ? '#e7f7ef' : '#fff4e5'}; color: ${order.status === 'Delivered' ? '#23945d' : '#fc8019'}; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                            ${order.status}
                        </span>
                    </div>
                    <div style="font-size: 0.85rem; color: #333; font-weight: 600;">
                        ${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
                    </div>
                    <div style="margin-top: 10px; font-weight: 800; color: var(--primary-color);">₹${order.total}</div>
                </div>
            `).join('');
        }
    } else {
        if (bookingHistory.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No dineout bookings found</div>';
        } else {
            container.innerHTML = bookingHistory.map(book => `
                <div class="history-item" style="border: 1px solid #eee; border-radius: 12px; padding: 1rem; margin-bottom: 1rem; background: #fffcf8;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                        <div>
                            <div style="font-weight: 800; font-size: 0.9rem; color: #1c1c1c;">${book.hotel}</div>
                            <div style="font-size: 0.75rem; color: #999;">Booking ID: ${book.id}</div>
                        </div>
                        <span class="history-status" style="background: #e7f7ef; color: #23945d; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                            Confirmed
                        </span>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center; margin-top: 10px;">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${book.id}" style="width: 60px; height: 60px; border-radius: 8px;">
                        <div style="font-size: 0.8rem; color: #666;">
                            <div><i class="far fa-calendar-alt"></i> ${book.date}</div>
                            <div><i class="far fa-clock"></i> ${book.time}</div>
                            <div><i class="fas fa-users"></i> ${book.guests} Guests</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
};

    updateCartIcon();

window.renderHistory = function() {
    const container = document.getElementById('history-list-container');
    if (!container) return;

    if (window.currentHistoryTab === 'orders') {
        if (!orderHistory || orderHistory.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No orders found</div>';
        } else {
            container.innerHTML = orderHistory.map(order => `
                <div class="history-item" style="border: 1px solid #eee; border-radius: 12px; padding: 1rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                        <div>
                            <div style="font-weight: 800; font-size: 0.9rem;">Order ${order.id}</div>
                            <div style="font-size: 0.75rem; color: #999;">${order.timestamp}</div>
                        </div>
                        <span class="history-status" style="background: ${order.status === 'Delivered' ? '#e7f7ef' : '#fff4e5'}; color: ${order.status === 'Delivered' ? '#23945d' : '#fc8019'}; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                            ${order.status}
                        </span>
                    </div>
                    <div style="font-size: 0.85rem; color: #333; font-weight: 600;">
                        ${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
                    </div>
                    <div style="margin-top: 10px; font-weight: 800; color: var(--primary-color);">₹${order.total}</div>
                </div>
            `).join('');
        }
    } else {
        if (!bookingHistory || bookingHistory.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No dineout bookings found</div>';
        } else {
            container.innerHTML = bookingHistory.map(book => `
                <div class="history-item" style="border: 1px solid #eee; border-radius: 12px; padding: 1rem; margin-bottom: 1rem; background: #fffcf8;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                        <div>
                            <div style="font-weight: 800; font-size: 0.9rem; color: #1c1c1c;">${book.hotel}</div>
                            <div style="font-size: 0.75rem; color: #999;">Booking ID: ${book.id}</div>
                        </div>
                        <span class="history-status" style="background: #e7f7ef; color: #23945d; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                            ${book.status}
                        </span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.8rem; color: #666; margin-top: 10px;">
                        <span><i class="far fa-calendar-alt"></i> ${book.date}</span>
                        <span><i class="far fa-clock"></i> ${book.time}</span>
                        <span><i class="fas fa-users"></i> ${book.guests} Guests</span>
                    </div>
                </div>
            `).join('');
        }
    }
};

    // Logo & App Entry
    document.querySelectorAll('.logo').forEach(l => {
        l.onclick = exitApp;
    });

    // Category Circle Interaction
    document.querySelectorAll('.dish-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const cat = circle.dataset.category;
            globalSearchQuery = cat === 'all' ? '' : cat;
            renderFoodMarketplace();
            document.getElementById('delivery-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Unified Search Interaction
    const mainSearch = document.getElementById('app-search-input');
    let searchTimeout = null;
    if (mainSearch) {
        mainSearch.oninput = (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                try {
                    globalSearchQuery = e.target.value.trim();
                    renderFoodMarketplace();
                    renderDineoutRestaurants();
                } catch (err) {
                    console.log("Search Logic Handled:", err);
                }
            }, 300);
        };
    }

    renderHistory();
    window.updateLanguage(window.currentLang);

    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = window.currentLang;
        langSelector.onchange = (e) => {
            window.updateLanguage(e.target.value);
            showToast(e.target.value === 'hi' ? 'भाषा बदली गई' : 'Language Updated');
        };
    }
    // Rotating Hero Messages
    const rotatingEl = document.getElementById('rotating-message');
    if (rotatingEl) {
        const messages = ["Exceptional?", "Delicious?", "Memorable?", "Vibrant?"];
        let msgIndex = 0;
        setInterval(() => {
            rotatingEl.style.opacity = '0';
            rotatingEl.style.transform = 'translateY(10px)';
            setTimeout(() => {
                msgIndex = (msgIndex + 1) % messages.length;
                rotatingEl.textContent = messages[msgIndex];
                rotatingEl.style.opacity = '1';
                rotatingEl.style.transform = 'translateY(0)';
            }, 500);
        }, 3000);
        rotatingEl.style.transition = 'all 0.5s ease';
    }
